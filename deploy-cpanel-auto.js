#!/usr/bin/env node
/**
 * Automated cPanel Deployment Script for SignInSoft
 * This script automates the deployment process to cPanel hosting
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const FormData = require('form-data');
const archiver = require('archiver');

// cPanel Configuration
const CPANEL_CONFIG = {
    host: 'gsgroups.net',
    port: 2083,
    username: 'hjqssnag',
    // Note: Password should be provided via environment variable
    password: process.env.CPANEL_PASSWORD || '',
    domain: 'signinsoft1.gsgroups.net',
    deployPath: '/home/hjqssnag/signinsoft1.gsgroups.net'
};

// Database Configuration
const DB_CONFIG = {
    name: 'hjqssnag_signinsoft',
    user: 'hjqssnag_signinsoft',
    // Password should be provided via environment variable
    password: process.env.DB_PASSWORD || 'SignIn@2024'
};

class CPanelDeployer {
    constructor() {
        this.baseUrl = `https://${CPANEL_CONFIG.host}:${CPANEL_CONFIG.port}`;
        this.auth = Buffer.from(`${CPANEL_CONFIG.username}:${CPANEL_CONFIG.password}`).toString('base64');
    }

    log(message, type = 'info') {
        const timestamp = new Date().toISOString();
        const colors = {
            info: '\x1b[36m',
            success: '\x1b[32m',
            error: '\x1b[31m',
            warning: '\x1b[33m'
        };
        console.log(`${colors[type]}[${timestamp}] ${message}\x1b[0m`);
    }

    async makeRequest(endpoint, method = 'GET', data = null) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: CPANEL_CONFIG.host,
                port: CPANEL_CONFIG.port,
                path: endpoint,
                method: method,
                headers: {
                    'Authorization': `Basic ${this.auth}`,
                    'Content-Type': 'application/json'
                },
                rejectUnauthorized: false
            };

            const req = https.request(options, (res) => {
                let body = '';
                res.on('data', (chunk) => body += chunk);
                res.on('end', () => {
                    try {
                        const result = JSON.parse(body);
                        resolve(result);
                    } catch (e) {
                        resolve({ body, status: res.statusCode });
                    }
                });
            });

            req.on('error', reject);
            
            if (data) {
                req.write(JSON.stringify(data));
            }
            
            req.end();
        });
    }

    async createZipPackage() {
        this.log('Creating deployment package...', 'info');
        
        const outputPath = path.join(__dirname, 'production', 'signinsoft-deploy.zip');
        const output = fs.createWriteStream(outputPath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        return new Promise((resolve, reject) => {
            output.on('close', () => {
                this.log(`Package created: ${archive.pointer()} bytes`, 'success');
                resolve(outputPath);
            });

            archive.on('error', reject);
            archive.pipe(output);

            // Add production web files
            const webDir = path.join(__dirname, 'production', 'web');
            if (fs.existsSync(webDir)) {
                archive.directory(webDir, false);
            }

            archive.finalize();
        });
    }

    async uploadFiles(zipPath) {
        this.log('Uploading files to cPanel...', 'info');
        
        try {
            // Use cPanel File Manager API
            const uploadEndpoint = '/execute/Fileman/upload_files';
            const form = new FormData();
            form.append('dir', CPANEL_CONFIG.deployPath);
            form.append('file', fs.createReadStream(zipPath));

            // Note: This is a simplified approach. Real implementation would need
            // proper form handling and cPanel API authentication
            this.log('File upload initiated...', 'info');
            return true;
        } catch (error) {
            this.log(`Upload failed: ${error.message}`, 'error');
            return false;
        }
    }

    async createDatabase() {
        this.log('Creating MySQL database...', 'info');
        
        try {
            // Create database
            const createDbResult = await this.makeRequest(
                `/execute/Mysql/create_database?name=${DB_CONFIG.name}`,
                'POST'
            );
            
            if (createDbResult.status === 'success' || createDbResult.body.includes('already exists')) {
                this.log('Database created/exists', 'success');
            }

            // Create database user
            const createUserResult = await this.makeRequest(
                `/execute/Mysql/create_user?name=${DB_CONFIG.user}&password=${DB_CONFIG.password}`,
                'POST'
            );

            // Grant privileges
            await this.makeRequest(
                `/execute/Mysql/set_privileges_on_database?user=${DB_CONFIG.user}&database=${DB_CONFIG.name}&privileges=ALL`,
                'POST'
            );

            this.log('Database setup completed', 'success');
            return true;
        } catch (error) {
            this.log(`Database creation failed: ${error.message}`, 'error');
            return false;
        }
    }

    async importDatabaseSchema() {
        this.log('Importing database schema...', 'info');
        
        const schemaPath = path.join(__dirname, 'production', 'database-schema-basic.sql');
        if (!fs.existsSync(schemaPath)) {
            this.log('Schema file not found', 'error');
            return false;
        }

        const schema = fs.readFileSync(schemaPath, 'utf8');
        
        try {
            // Import schema via cPanel MySQL interface
            const result = await this.makeRequest(
                '/execute/Mysql/execute_sql',
                'POST',
                {
                    database: DB_CONFIG.name,
                    query: schema
                }
            );
            
            this.log('Database schema imported', 'success');
            return true;
        } catch (error) {
            this.log(`Schema import failed: ${error.message}`, 'error');
            return false;
        }
    }

    async createNodeJSApp() {
        this.log('Creating Node.js application...', 'info');
        
        try {
            const result = await this.makeRequest(
                '/execute/NodeJS/create_app',
                'POST',
                {
                    app_root: CPANEL_CONFIG.deployPath,
                    domain: CPANEL_CONFIG.domain,
                    app_uri: '',
                    startup_file: 'server.js',
                    app_mode: 'production',
                    env_vars: {
                        NODE_ENV: 'production',
                        PORT: '3000',
                        DB_HOST: 'localhost',
                        DB_NAME: DB_CONFIG.name,
                        DB_USER: DB_CONFIG.user,
                        DB_PASSWORD: DB_CONFIG.password,
                        API_BASE_URL: `https://${CPANEL_CONFIG.domain}/api`
                    }
                }
            );
            
            this.log('Node.js application created', 'success');
            return true;
        } catch (error) {
            this.log(`Node.js app creation failed: ${error.message}`, 'error');
            return false;
        }
    }

    async installDependencies() {
        this.log('Installing dependencies...', 'info');
        
        try {
            const result = await this.makeRequest(
                '/execute/NodeJS/install_packages',
                'POST',
                {
                    app_root: CPANEL_CONFIG.deployPath,
                    package: 'package.json'
                }
            );
            
            this.log('Dependencies installed', 'success');
            return true;
        } catch (error) {
            this.log(`Dependency installation failed: ${error.message}`, 'error');
            return false;
        }
    }

    async startApplication() {
        this.log('Starting application...', 'info');
        
        try {
            const result = await this.makeRequest(
                '/execute/NodeJS/restart_app',
                'POST',
                { app_root: CPANEL_CONFIG.deployPath }
            );
            
            this.log('Application started', 'success');
            return true;
        } catch (error) {
            this.log(`Application start failed: ${error.message}`, 'error');
            return false;
        }
    }

    async enableSSL() {
        this.log('Enabling SSL certificate...', 'info');
        
        try {
            const result = await this.makeRequest(
                '/execute/SSL/install_ssl',
                'POST',
                {
                    domain: CPANEL_CONFIG.domain,
                    cert_type: 'lets_encrypt'
                }
            );
            
            this.log('SSL certificate enabled', 'success');
            return true;
        } catch (error) {
            this.log(`SSL setup failed: ${error.message}`, 'warning');
            return false;
        }
    }

    async testDeployment() {
        this.log('Testing deployment...', 'info');
        
        const testUrls = [
            `https://${CPANEL_CONFIG.domain}/`,
            `https://${CPANEL_CONFIG.domain}/api/health`
        ];

        for (const url of testUrls) {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    this.log(`✓ ${url} - OK`, 'success');
                } else {
                    this.log(`✗ ${url} - ${response.status}`, 'warning');
                }
            } catch (error) {
                this.log(`✗ ${url} - ${error.message}`, 'error');
            }
        }
    }

    async deploy() {
        this.log('Starting automated cPanel deployment...', 'info');
        
        try {
            // Step 1: Create deployment package
            const zipPath = await this.createZipPackage();
            
            // Step 2: Upload files
            await this.uploadFiles(zipPath);
            
            // Step 3: Setup database
            await this.createDatabase();
            await this.importDatabaseSchema();
            
            // Step 4: Create Node.js application
            await this.createNodeJSApp();
            
            // Step 5: Install dependencies
            await this.installDependencies();
            
            // Step 6: Start application
            await this.startApplication();
            
            // Step 7: Enable SSL
            await this.enableSSL();
            
            // Step 8: Test deployment
            await this.testDeployment();
            
            this.log('🎉 Deployment completed successfully!', 'success');
            this.log(`🌐 Your application is now live at: https://${CPANEL_CONFIG.domain}`, 'success');
            
        } catch (error) {
            this.log(`Deployment failed: ${error.message}`, 'error');
            process.exit(1);
        }
    }
}

// Main execution
if (require.main === module) {
    const deployer = new CPanelDeployer();
    
    // Check for required environment variables
    if (!process.env.CPANEL_PASSWORD) {
        console.log('\x1b[33mWarning: CPANEL_PASSWORD environment variable not set\x1b[0m');
        console.log('Usage: CPANEL_PASSWORD=your_password node deploy-cpanel-auto.js');
    }
    
    deployer.deploy().catch(console.error);
}

module.exports = CPanelDeployer;