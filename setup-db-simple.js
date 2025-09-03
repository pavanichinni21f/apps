#!/usr/bin/env node

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

async function setupDatabase() {
  let connection;
  
  try {
    console.log('🔄 Connecting to MySQL...');
    connection = await mysql.createConnection(dbConfig);
    
    console.log('🔄 Creating database...');
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    await connection.end();
    
    // Reconnect to the specific database
    connection = await mysql.createConnection({
      ...dbConfig,
      database: dbName
    });
    
    console.log('🔄 Reading schema file...');
    const schemaPath = path.join(__dirname, 'database-schema-basic.sql');
    const sqlContent = await fs.readFile(schemaPath, 'utf8');
    
    console.log('🔄 Executing schema...');
    // Remove comments and split by semicolons
    const cleanedContent = sqlContent
      .split('\n')
      .filter(line => !line.trim().startsWith('--') && line.trim().length > 0)
      .join('\n');
    
    const statements = cleanedContent
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0);
    
    console.log(`Found ${statements.length} statements to execute`);
    
    for (const statement of statements) {
      if (statement.trim()) {
        try {
          console.log(`Executing: ${statement.substring(0, 50)}...`);
          await connection.execute(statement);
        } catch (error) {
          if (!error.message.includes('already exists')) {
            console.warn(`⚠️  Warning: ${error.message}`);
            console.warn(`Statement: ${statement.substring(0, 100)}...`);
          }
        }
      }
    }
    
    console.log('🔄 Creating default users...');
    
    // Hash passwords
    const adminPassword = await bcrypt.hash('admin123', 12);
    const hrPassword = await bcrypt.hash('hr123', 12);
    const candidatePassword = await bcrypt.hash('candidate123', 12);
    
    // Get role IDs
    const [adminRole] = await connection.execute('SELECT id FROM roles WHERE name = "admin"');
    const [hrRole] = await connection.execute('SELECT id FROM roles WHERE name = "hr"');
    const [candidateRole] = await connection.execute('SELECT id FROM roles WHERE name = "candidate"');
    
    // Create default users
    const defaultUsers = [
      {
        email: 'admin@signinsoft.com',
        password_hash: adminPassword,
        first_name: 'System',
        last_name: 'Administrator',
        phone: '+1-555-0001',
        role_id: adminRole[0].id,
        email_verified: 1
      },
      {
        email: 'hr@signinsoft.com',
        password_hash: hrPassword,
        first_name: 'HR',
        last_name: 'Manager',
        phone: '+1-555-0002',
        role_id: hrRole[0].id,
        email_verified: 1
      },
      {
        email: 'candidate@example.com',
        password_hash: candidatePassword,
        first_name: 'John',
        last_name: 'Candidate',
        phone: '+1-555-0003',
        role_id: candidateRole[0].id,
        email_verified: 1
      }
    ];
    
    for (const user of defaultUsers) {
      try {
        await connection.execute(
          `INSERT IGNORE INTO users (email, password_hash, first_name, last_name, phone, role_id, email_verified) 
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [user.email, user.password_hash, user.first_name, user.last_name, user.phone, user.role_id, user.email_verified]
        );
        console.log(`✅ Created user: ${user.email}`);
      } catch (error) {
        if (!error.message.includes('Duplicate entry')) {
          console.warn(`⚠️  Warning creating user ${user.email}: ${error.message}`);
        }
      }
    }
    
    // Create a sample company
    try {
      await connection.execute(
        `INSERT IGNORE INTO companies (name, description, website, industry, size_range, created_by) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        ['SignInSoft Technologies', 'Leading HR management solutions provider', 'https://signinsoft.com', 'Technology', '51-200', adminRole[0].id]
      );
      console.log('✅ Created sample company');
    } catch (error) {
      if (!error.message.includes('Duplicate entry')) {
        console.warn(`⚠️  Warning creating company: ${error.message}`);
      }
    }
    
    console.log('\n🎉 Database setup completed successfully!');
    console.log('\n📋 Default login credentials:');
    console.log('   Admin: admin@signinsoft.com / admin123');
    console.log('   HR: hr@signinsoft.com / hr123');
    console.log('   Candidate: candidate@example.com / candidate123');
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

setupDatabase();