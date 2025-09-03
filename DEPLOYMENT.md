# SignInSoft cPanel Deployment Guide

This guide provides step-by-step instructions for deploying SignInSoft to HostingRaja cPanel hosting.

## Prerequisites

- cPanel hosting account with HostingRaja
- Node.js support enabled (contact support if needed)
- MySQL database access
- Domain name configured

## Part 1: Database Setup

### Step 1: Create MySQL Database

1. **Login to cPanel**
   - Go to your HostingRaja cPanel dashboard
   - Navigate to "Databases" section

2. **Create Database**
   - Click "MySQL Databases"
   - Create new database: `signinsoft_db`
   - Note the full database name (usually prefixed with your username)

3. **Create Database User**
   - Create new user: `signinsoft_user`
   - Set a strong password
   - Add user to database with ALL PRIVILEGES

4. **Import Database Schema**
   - Go to "phpMyAdmin"
   - Select your database
   - Click "Import" tab
   - Upload `database-schema.sql` file
   - Click "Go" to execute

### Step 2: Configure Database Connection

1. **Update Environment Variables**
   - Edit `.env` file with your database details:
   ```env
   DB_HOST=localhost
   DB_NAME=username_signinsoft_db
   DB_USER=username_signinsoft_user
   DB_PASSWORD=your_database_password
   ```

## Part 2: Backend Deployment

### Step 1: Upload Files

1. **Extract web.zip**
   - Upload `web.zip` to cPanel File Manager
   - Navigate to `public_html` folder
   - Extract the zip file contents

2. **Set File Permissions**
   - Set folders to 755 permissions
   - Set files to 644 permissions
   - Set `uploads/` folder to 777 permissions

### Step 2: Install Dependencies

1. **Access Terminal (if available)**
   - Use cPanel Terminal or SSH
   - Navigate to your domain folder
   - Run: `npm install --production`

2. **Alternative: Upload node_modules**
   - If terminal access is limited
   - Run `npm install` locally
   - Upload the entire `node_modules` folder

### Step 3: Configure Node.js Application

1. **Setup Node.js App**
   - Go to cPanel "Node.js Apps"
   - Create new application
   - Set Node.js version (14+ recommended)
   - Set application root to your domain folder
   - Set startup file: `server.js`
   - Set application URL to your domain

2. **Environment Variables**
   - In Node.js app settings
   - Add environment variables from `.env` file
   - Or ensure `.env` file is properly configured

### Step 4: Start Application

1. **Start the App**
   - Click "Start" in Node.js Apps
   - Monitor logs for any errors
   - Test by visiting your domain

## Part 3: Frontend Configuration

### Step 1: Update API Endpoints

1. **Configure API Base URL**
   - Frontend should point to your domain's API
   - Update any hardcoded localhost URLs
   - Ensure CORS is properly configured

### Step 2: Test Frontend

1. **Access Application**
   - Visit your domain
   - Test login/registration
   - Verify all features work

## Part 4: Mobile App Configuration

### Step 1: Update API Configuration

1. **Extract mobile.zip**
   - Extract on your development machine
   - Update API endpoints in configuration files

2. **Configure Environment**
   ```javascript
   // In your mobile app config
   const API_BASE_URL = 'https://signinsoft.net/api';
   ```

### Step 2: Build Mobile App

1. **Install Dependencies**
   ```bash
   cd mobile
   npm install
   ```

2. **Build for Android**
   ```bash
   expo build:android
   # or
   eas build --platform android
   ```

3. **Build for iOS**
   ```bash
   expo build:ios
   # or
   eas build --platform ios
   ```

## Part 5: SSL Certificate Setup

### Step 1: Enable SSL

1. **Free SSL Certificate**
   - Go to cPanel "SSL/TLS"
   - Use "Let's Encrypt" free certificate
   - Enable "Force HTTPS Redirect"

2. **Update Configuration**
   - Update all URLs to use HTTPS
   - Test all functionality with SSL

## Part 6: Performance Optimization

### Step 1: Enable Compression

1. **Gzip Compression**
   - Add to `.htaccess`:
   ```apache
   <IfModule mod_deflate.c>
       AddOutputFilterByType DEFLATE text/plain
       AddOutputFilterByType DEFLATE text/html
       AddOutputFilterByType DEFLATE text/xml
       AddOutputFilterByType DEFLATE text/css
       AddOutputFilterByType DEFLATE application/xml
       AddOutputFilterByType DEFLATE application/xhtml+xml
       AddOutputFilterByType DEFLATE application/rss+xml
       AddOutputFilterByType DEFLATE application/javascript
       AddOutputFilterByType DEFLATE application/x-javascript
   </IfModule>
   ```

### Step 2: Caching

1. **Browser Caching**
   - Add to `.htaccess`:
   ```apache
   <IfModule mod_expires.c>
       ExpiresActive On
       ExpiresByType image/jpg "access plus 1 month"
       ExpiresByType image/jpeg "access plus 1 month"
       ExpiresByType image/gif "access plus 1 month"
       ExpiresByType image/png "access plus 1 month"
       ExpiresByType text/css "access plus 1 month"
       ExpiresByType application/pdf "access plus 1 month"
       ExpiresByType text/javascript "access plus 1 month"
       ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

## Part 7: Monitoring and Maintenance

### Step 1: Setup Monitoring

1. **Error Logging**
   - Monitor Node.js application logs
   - Set up error notifications
   - Regular database backups

2. **Performance Monitoring**
   - Monitor server resources
   - Database performance
   - Application response times

### Step 2: Regular Maintenance

1. **Updates**
   - Keep Node.js dependencies updated
   - Regular security patches
   - Database optimization

2. **Backups**
   - Regular database backups
   - File system backups
   - Test restore procedures

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Verify database credentials
   - Check database server status
   - Ensure database user has proper permissions

2. **Node.js Application Won't Start**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review application logs

3. **CORS Errors**
   - Update CORS configuration
   - Ensure frontend and backend URLs match
   - Check SSL certificate status

4. **File Upload Issues**
   - Check upload directory permissions
   - Verify file size limits
   - Ensure proper MIME type handling

### Support Resources

- **HostingRaja Support**: Contact for Node.js and database issues
- **Application Logs**: Check cPanel error logs
- **Database Logs**: Monitor MySQL error logs

## Security Checklist

- [ ] Strong database passwords
- [ ] SSL certificate installed
- [ ] Environment variables secured
- [ ] File permissions properly set
- [ ] Regular security updates
- [ ] Backup procedures in place
- [ ] Rate limiting configured
- [ ] Input validation implemented

## Post-Deployment Testing

1. **Functionality Tests**
   - User registration/login
   - Dashboard access
   - File uploads
   - Database operations
   - API endpoints

2. **Performance Tests**
   - Page load times
   - API response times
   - Database query performance
   - Mobile app connectivity

3. **Security Tests**
   - SSL certificate validation
   - Authentication flows
   - Authorization checks
   - Input sanitization

For additional support or questions, refer to the application documentation or contact the development team.