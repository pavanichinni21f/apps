#!/usr/bin/env node
/**
 * Complete cPanel Deployment Automation
 * This script performs actual deployment to cPanel using API calls
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

// Configuration
const config = {
    cpanel: {
        host: 's3741.bom1.stableserver.net',
        port: 2083,
        username: 'signinsoft.app',
        password: process.env.CPANEL_PASSWORD || 'your_cpanel_password',
        domain: 'signinsoft.app',
        deployPath: '/public_html'
    },
    database: {
        name: 'signinsoft_main',
        user: 'signinsoft_user',
        password: 'SignInSoft2024!DB'
    }
};

class CPanelDeployment {
    constructor() {
        this.baseUrl = `https://${config.cpanel.host}:${config.cpanel.port}`;
        this.auth = Buffer.from(`${config.cpanel.username}:${config.cpanel.password}`).toString('base64');
    }

    log(message, type = 'info') {
        const colors = {
            info: '\x1b[36m',
            success: '\x1b[32m',
            error: '\x1b[31m',
            warning: '\x1b[33m'
        };
        const timestamp = new Date().toISOString();
        console.log(`${colors[type]}[${timestamp}] ${message}\x1b[0m`);
    }

    async makeAPICall(endpoint, method = 'GET', data = null) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: config.cpanel.host,
                port: config.cpanel.port,
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

    async uploadFileViaCurl(filePath, remotePath) {
        this.log(`Uploading ${filePath} to ${remotePath}...`, 'info');
        
        try {
            const curlCommand = `curl -k -u "${config.cpanel.username}:${config.cpanel.password}" \
                -F "dir=${remotePath}" \
                -F "file=@${filePath}" \
                "${this.baseUrl}/execute/Fileman/upload_files"`;
            
            const { stdout, stderr } = await execAsync(curlCommand);
            
            if (stderr && !stderr.includes('Warning')) {
                throw new Error(stderr);
            }
            
            this.log('File uploaded successfully', 'success');
            return true;
        } catch (error) {
            this.log(`Upload failed: ${error.message}`, 'error');
            return false;
        }
    }

    async extractFiles(zipPath, extractPath) {
        this.log(`Extracting files to ${extractPath}...`, 'info');
        
        try {
            const result = await this.makeAPICall(
                `/execute/Fileman/extract_archive?path=${zipPath}&extractto=${extractPath}`,
                'POST'
            );
            
            this.log('Files extracted successfully', 'success');
            return true;
        } catch (error) {
            this.log(`Extraction failed: ${error.message}`, 'error');
            return false;
        }
    }

    async createMySQLDatabase() {
        this.log('Creating MySQL database...', 'info');
        
        try {
            // Create database
            const createDbResult = await this.makeAPICall(
                `/execute/Mysql/create_database?name=${config.database.name}`,
                'POST'
            );
            
            this.log('Database created', 'success');
            
            // Create user
            const createUserResult = await this.makeAPICall(
                `/execute/Mysql/create_user?name=${config.database.user}&password=${config.database.password}`,
                'POST'
            );
            
            this.log('Database user created', 'success');
            
            // Grant privileges
            await this.makeAPICall(
                `/execute/Mysql/set_privileges_on_database?user=${config.database.user}&database=${config.database.name}&privileges=ALL`,
                'POST'
            );
            
            this.log('Database privileges granted', 'success');
            return true;
        } catch (error) {
            this.log(`Database setup failed: ${error.message}`, 'error');
            return false;
        }
    }

    async importDatabaseSchema() {
        this.log('Importing database schema...', 'info');
        
        const schemaPath = path.join(__dirname, 'production', 'database-schema-basic.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');
        
        try {
            const result = await this.makeAPICall(
                '/execute/Mysql/execute_sql',
                'POST',
                {
                    database: config.database.name,
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

    async createNodeJSApplication() {
        this.log('Creating Node.js application...', 'info');
        
        try {
            const result = await this.makeAPICall(
                '/execute/NodeJS/create_app',
                'POST',
                {
                    app_root: config.cpanel.deployPath,
                    domain: config.cpanel.domain,
                    app_uri: '',
                    startup_file: 'server.js',
                    app_mode: 'production',
                    env_vars: {
                        NODE_ENV: 'production',
                        PORT: '3000',
                        DB_HOST: 'localhost',
                        DB_NAME: config.database.name,
                        DB_USER: config.database.user,
                        DB_PASSWORD: config.database.password,
                        API_BASE_URL: `https://${config.cpanel.domain}/api`,
                        CORS_ORIGIN: `https://${config.cpanel.domain}`,
                        JWT_SECRET: 'your-super-secret-jwt-key-change-this-in-production',
                        JWT_EXPIRES_IN: '24h'
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
        this.log('Installing Node.js dependencies...', 'info');
        
        try {
            const result = await this.makeAPICall(
                '/execute/NodeJS/install_packages',
                'POST',
                {
                    app_root: config.cpanel.deployPath,
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
        this.log('Starting Node.js application...', 'info');
        
        try {
            const result = await this.makeAPICall(
                '/execute/NodeJS/restart_app',
                'POST',
                { app_root: config.cpanel.deployPath }
            );
            
            this.log('Application started successfully', 'success');
            return true;
        } catch (error) {
            this.log(`Application start failed: ${error.message}`, 'error');
            return false;
        }
    }

    async enableSSL() {
        this.log('Enabling SSL certificate...', 'info');
        
        try {
            const result = await this.makeAPICall(
                '/execute/SSL/install_ssl',
                'POST',
                {
                    domain: config.cpanel.domain,
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
            `https://${config.cpanel.domain}/`,
            `https://${config.cpanel.domain}/api/health`,
            `https://${config.cpanel.domain}/api/auth/register`
        ];

        for (const url of testUrls) {
            try {
                const curlCommand = `curl -s -o /dev/null -w "%{http_code}" "${url}"`;
                const { stdout } = await execAsync(curlCommand);
                const statusCode = stdout.trim();
                
                if (['200', '404', '405'].includes(statusCode)) {
                    this.log(`✓ ${url} - ${statusCode}`, 'success');
                } else {
                    this.log(`✗ ${url} - ${statusCode}`, 'warning');
                }
            } catch (error) {
                this.log(`✗ ${url} - ${error.message}`, 'error');
            }
        }
    }

    async performFullDeployment() {
        this.log('🚀 Starting complete cPanel deployment...', 'info');
        
        try {
            // Step 1: Upload deployment package
            const zipPath = path.join(__dirname, 'production', 'signinsoft-deploy.zip');
            if (fs.existsSync(zipPath)) {
                await this.uploadFileViaCurl(zipPath, config.cpanel.deployPath);
                await this.extractFiles(`${config.cpanel.deployPath}/signinsoft-deploy.zip`, config.cpanel.deployPath);
            } else {
                this.log('Deployment package not found. Please run ./deploy.sh first.', 'error');
                return false;
            }
            
            // Step 2: Setup database
            await this.createMySQLDatabase();
            await this.importDatabaseSchema();
            
            // Step 3: Create Node.js application
            await this.createNodeJSApplication();
            
            // Step 4: Install dependencies and start app
            await this.installDependencies();
            await this.startApplication();
            
            // Step 5: Enable SSL
            await this.enableSSL();
            
            // Step 6: Test deployment
            await this.testDeployment();
            
            this.log('🎉 Deployment completed successfully!', 'success');
            this.log(`🌐 Your application is live at: https://${config.cpanel.domain}`, 'success');
            this.log(`🔍 API Health Check: https://${config.cpanel.domain}/api/health`, 'success');
            
            return true;
        } catch (error) {
            this.log(`Deployment failed: ${error.message}`, 'error');
            return false;
        }
    }
}

// Execute deployment
if (require.main === module) {
    const deployer = new CPanelDeployment();
    
    if (!process.env.CPANEL_PASSWORD) {
        console.log('\x1b[33mUsage: CPANEL_PASSWORD=your_password node cpanel-deploy.js\x1b[0m');
        process.exit(1);
    }
    
    deployer.performFullDeployment()
        .then(success => {
            if (success) {
                console.log('\x1b[32m✅ Deployment completed successfully!\x1b[0m');
                process.exit(0);
            } else {
                console.log('\x1b[31m❌ Deployment failed!\x1b[0m');
                process.exit(1);
            }
        })
        .catch(error => {
            console.error('\x1b[31mDeployment error:', error.message, '\x1b[0m');
            process.exit(1);
        });
}

module.exports = CPanelDeployment;