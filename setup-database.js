#!/usr/bin/env node

/**
 * SignInSoft Database Setup Script
 * 
 * This script sets up a local MySQL database for the SignInSoft application.
 * It creates the database, tables, indexes, and inserts initial data.
 * 
 * Prerequisites:
 * - MySQL server running locally
 * - Node.js installed
 * - Required npm packages: mysql2, bcryptjs, dotenv
 * 
 * Usage:
 *   node setup-database.js
 * 
 * Environment Variables (create .env file):
 *   DB_HOST=localhost
 *   DB_PORT=3306
 *   DB_USER=root
 *   DB_PASSWORD=your_password
 *   DB_NAME=signinsoft_db
 */

const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
};

const dbName = process.env.DB_NAME || 'signinsoft_db';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step, message) {
  log(`[${step}] ${message}`, 'cyan');
}

function logSuccess(message) {
  log(`✓ ${message}`, 'green');
}

function logError(message) {
  log(`✗ ${message}`, 'red');
}

function logWarning(message) {
  log(`⚠ ${message}`, 'yellow');
}

async function createConnection(includeDb = false) {
  const config = { ...dbConfig };
  if (includeDb) {
    config.database = dbName;
  }
  
  try {
    const connection = await mysql.createConnection(config);
    return connection;
  } catch (error) {
    logError(`Failed to connect to MySQL: ${error.message}`);
    throw error;
  }
}

async function checkMySQLConnection() {
  logStep('1', 'Checking MySQL connection...');
  
  try {
    const connection = await createConnection();
    await connection.execute('SELECT 1');
    await connection.end();
    logSuccess('MySQL connection established');
    return true;
  } catch (error) {
    logError('MySQL connection failed');
    logError('Please ensure MySQL is running and credentials are correct');
    logError(`Error: ${error.message}`);
    return false;
  }
}

async function createDatabase() {
  logStep('2', `Creating database '${dbName}'...`);
  
  try {
    const connection = await createConnection();
    
    // Check if database exists
    const [rows] = await connection.execute(
      'SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?',
      [dbName]
    );
    
    if (rows.length > 0) {
      logWarning(`Database '${dbName}' already exists`);
      
      // Ask user if they want to recreate it
      const readline = require('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      const answer = await new Promise((resolve) => {
        rl.question('Do you want to drop and recreate the database? (y/N): ', resolve);
      });
      
      rl.close();
      
      if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        await connection.execute(`DROP DATABASE ${dbName}`);
        logSuccess(`Database '${dbName}' dropped`);
      } else {
        await connection.end();
        logWarning('Database setup cancelled');
        return false;
      }
    }
    
    await connection.execute(`CREATE DATABASE ${dbName} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    await connection.end();
    
    logSuccess(`Database '${dbName}' created successfully`);
    return true;
  } catch (error) {
    logError(`Failed to create database: ${error.message}`);
    throw error;
  }
}

async function executeSQLFile() {
  logStep('3', 'Executing database schema...');
  
  try {
    const connection = await createConnection(true);
    
    // Read the SQL schema file
    const schemaPath = path.join(__dirname, 'database-schema.sql');
    const sqlContent = await fs.readFile(schemaPath, 'utf8');
    
    // Split SQL content by semicolons and execute each statement
    const statements = sqlContent
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--') && !stmt.startsWith('/*'));
    
    let executedCount = 0;
    
    for (const statement of statements) {
      if (statement.trim()) {
        try {
          await connection.execute(statement);
          executedCount++;
        } catch (error) {
          // Skip certain errors that are expected
          if (!error.message.includes('already exists') && 
              !error.message.includes('Duplicate entry')) {
            logWarning(`Warning executing statement: ${error.message}`);
          }
        }
      }
    }
    
    await connection.end();
    logSuccess(`Database schema executed successfully (${executedCount} statements)`);
    return true;
  } catch (error) {
    logError(`Failed to execute schema: ${error.message}`);
    throw error;
  }
}

async function createDefaultUsers() {
  logStep('4', 'Creating default users...');
  
  try {
    const connection = await createConnection(true);
    
    // Hash passwords
    const adminPassword = await bcrypt.hash('admin123', 12);
    const hrPassword = await bcrypt.hash('hr123', 12);
    const candidatePassword = await bcrypt.hash('candidate123', 12);
    
    // Get role IDs
    const [adminRole] = await connection.execute('SELECT id FROM roles WHERE name = "admin"');
    const [hrRole] = await connection.execute('SELECT id FROM roles WHERE name = "hr"');
    const [candidateRole] = await connection.execute('SELECT id FROM roles WHERE name = "candidate"');
    
    if (adminRole.length === 0 || hrRole.length === 0 || candidateRole.length === 0) {
      throw new Error('Required roles not found in database');
    }
    
    // Create default users
    const defaultUsers = [
      {
        email: 'admin@signinsoft.com',
        password_hash: adminPassword,
        first_name: 'System',
        last_name: 'Administrator',
        phone: '+1-555-0001',
        role_id: adminRole[0].id,
        email_verified: true
      },
      {
        email: 'hr@signinsoft.com',
        password_hash: hrPassword,
        first_name: 'HR',
        last_name: 'Manager',
        phone: '+1-555-0002',
        role_id: hrRole[0].id,
        email_verified: true
      },
      {
        email: 'candidate@example.com',
        password_hash: candidatePassword,
        first_name: 'John',
        last_name: 'Candidate',
        phone: '+1-555-0003',
        role_id: candidateRole[0].id,
        email_verified: true
      }
    ];
    
    for (const user of defaultUsers) {
      try {
        await connection.execute(
          `INSERT INTO users (email, password_hash, first_name, last_name, phone, role_id, email_verified) 
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [user.email, user.password_hash, user.first_name, user.last_name, user.phone, user.role_id, user.email_verified]
        );
        logSuccess(`Created user: ${user.email}`);
      } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          logWarning(`User ${user.email} already exists`);
        } else {
          throw error;
        }
      }
    }
    
    await connection.end();
    logSuccess('Default users created successfully');
    return true;
  } catch (error) {
    logError(`Failed to create default users: ${error.message}`);
    throw error;
  }
}

async function createSampleData() {
  logStep('5', 'Creating sample data...');
  
  try {
    const connection = await createConnection(true);
    
    // Create sample company
    const [companyResult] = await connection.execute(
      `INSERT INTO companies (name, description, website, industry, size_range, created_by) 
       VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)`,
      ['SignInSoft Inc.', 'Leading HR management software company', 'https://signinsoft.com', 'Technology', '51-200', 1]
    );
    
    const companyId = companyResult.insertId || companyResult.id;
    
    // Create sample department
    const [deptResult] = await connection.execute(
      `INSERT INTO departments (company_id, name, description) 
       VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)`,
      [companyId, 'Engineering', 'Software development and technical operations']
    );
    
    const deptId = deptResult.insertId || deptResult.id;
    
    // Create sample job posting
    await connection.execute(
      `INSERT INTO jobs (company_id, department_id, category_id, title, description, requirements, 
                        employment_type, experience_level, location, salary_min, salary_max, 
                        status, posted_by) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) 
       ON DUPLICATE KEY UPDATE id=id`,
      [
        companyId, deptId, 1, // Technology category
        'Senior Full Stack Developer',
        'We are looking for an experienced Full Stack Developer to join our growing team.',
        'Bachelor\'s degree in Computer Science or related field. 5+ years of experience with React, Node.js, and databases.',
        'full-time', 'senior', 'San Francisco, CA',
        120000, 180000, 'active', 2 // Posted by HR user
      ]
    );
    
    // Create sample content
    await connection.execute(
      `INSERT INTO contents (category_id, title, slug, content, excerpt, status, author_id, published_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE id=id`,
      [
        1, // Company News category
        'Welcome to SignInSoft',
        'welcome-to-signinsoft',
        'Welcome to SignInSoft, your comprehensive HR management solution. We\'re excited to help you streamline your hiring process.',
        'Welcome to SignInSoft, your comprehensive HR management solution.',
        'published', 1, new Date()
      ]
    );
    
    await connection.end();
    logSuccess('Sample data created successfully');
    return true;
  } catch (error) {
    logError(`Failed to create sample data: ${error.message}`);
    throw error;
  }
}

async function verifySetup() {
  logStep('6', 'Verifying database setup...');
  
  try {
    const connection = await createConnection(true);
    
    // Check tables
    const [tables] = await connection.execute('SHOW TABLES');
    const tableCount = tables.length;
    
    // Check users
    const [users] = await connection.execute('SELECT COUNT(*) as count FROM users');
    const userCount = users[0].count;
    
    // Check roles
    const [roles] = await connection.execute('SELECT COUNT(*) as count FROM roles');
    const roleCount = roles[0].count;
    
    await connection.end();
    
    logSuccess(`Database verification complete:`);
    log(`  - Tables created: ${tableCount}`, 'green');
    log(`  - Users created: ${userCount}`, 'green');
    log(`  - Roles created: ${roleCount}`, 'green');
    
    return true;
  } catch (error) {
    logError(`Database verification failed: ${error.message}`);
    throw error;
  }
}

async function displayCredentials() {
  log('\n' + '='.repeat(60), 'bright');
  log('DATABASE SETUP COMPLETE!', 'bright');
  log('='.repeat(60), 'bright');
  
  log('\nDatabase Connection Details:', 'cyan');
  log(`Host: ${dbConfig.host}`, 'blue');
  log(`Port: ${dbConfig.port}`, 'blue');
  log(`Database: ${dbName}`, 'blue');
  log(`User: ${dbConfig.user}`, 'blue');
  
  log('\nDefault User Accounts:', 'cyan');
  log('Administrator:', 'yellow');
  log('  Email: admin@signinsoft.com', 'blue');
  log('  Password: admin123', 'blue');
  
  log('HR Manager:', 'yellow');
  log('  Email: hr@signinsoft.com', 'blue');
  log('  Password: hr123', 'blue');
  
  log('Candidate:', 'yellow');
  log('  Email: candidate@example.com', 'blue');
  log('  Password: candidate123', 'blue');
  
  log('\nNext Steps:', 'cyan');
  log('1. Update your .env file with the database connection details', 'blue');
  log('2. Run the backend API server', 'blue');
  log('3. Test the application with the default credentials', 'blue');
  
  logWarning('\nIMPORTANT: Change default passwords in production!');
  log('='.repeat(60), 'bright');
}

async function main() {
  try {
    log('SignInSoft Database Setup', 'bright');
    log('='.repeat(30), 'bright');
    
    // Check if required packages are installed
    try {
      require('mysql2');
      require('bcryptjs');
      require('dotenv');
    } catch (error) {
      logError('Required packages not found. Please install them first:');
      log('npm install mysql2 bcryptjs dotenv', 'yellow');
      process.exit(1);
    }
    
    // Step 1: Check MySQL connection
    const connectionOk = await checkMySQLConnection();
    if (!connectionOk) {
      process.exit(1);
    }
    
    // Step 2: Create database
    const dbCreated = await createDatabase();
    if (!dbCreated) {
      process.exit(1);
    }
    
    // Step 3: Execute schema
    await executeSQLFile();
    
    // Step 4: Create default users
    await createDefaultUsers();
    
    // Step 5: Create sample data
    await createSampleData();
    
    // Step 6: Verify setup
    await verifySetup();
    
    // Display final information
    await displayCredentials();
    
  } catch (error) {
    logError(`\nSetup failed: ${error.message}`);
    log('\nPlease check the error above and try again.', 'yellow');
    process.exit(1);
  }
}

// Handle process termination
process.on('SIGINT', () => {
  log('\nSetup interrupted by user', 'yellow');
  process.exit(1);
});

process.on('SIGTERM', () => {
  log('\nSetup terminated', 'yellow');
  process.exit(1);
});

// Run the setup
if (require.main === module) {
  main();
}

module.exports = {
  createConnection,
  dbConfig,
  dbName
};