#!/bin/bash

# Deployment Verification Script
# This script provides the exact manual steps needed for cPanel deployment

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🔍 SignInSoft cPanel Deployment Verification${NC}"
echo -e "${BLUE}=============================================${NC}"
echo ""

# Test current status
echo -e "${YELLOW}Testing current deployment status...${NC}"
echo ""

# Test main site
echo -n "Main Site (https://signinsoft1.gsgroups.net/): "
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://signinsoft1.gsgroups.net/" || echo "ERROR")
if [[ "$STATUS" == "200" ]]; then
    echo -e "${GREEN}✅ WORKING${NC}"
elif [[ "$STATUS" == "404" ]]; then
    echo -e "${RED}❌ 404 - Application not started${NC}"
else
    echo -e "${RED}❌ Status: $STATUS${NC}"
fi

# Test API health
echo -n "API Health (https://signinsoft1.gsgroups.net/api/health): "
API_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://signinsoft1.gsgroups.net/api/health" || echo "ERROR")
if [[ "$API_STATUS" == "200" ]]; then
    echo -e "${GREEN}✅ WORKING${NC}"
elif [[ "$API_STATUS" == "404" ]]; then
    echo -e "${RED}❌ 404 - Node.js app not running${NC}"
else
    echo -e "${RED}❌ Status: $API_STATUS${NC}"
fi

echo ""
echo -e "${BLUE}📋 Manual cPanel Deployment Steps${NC}"
echo -e "${BLUE}==================================${NC}"
echo ""
echo -e "${YELLOW}Your cPanel Login:${NC}"
echo "• URL: https://gsgroups.net:2083"
echo "• Username: hjqssnag"
echo "• Password: [Your cPanel Password]"
echo ""
echo -e "${YELLOW}Step 1: Upload Files${NC}"
echo "1. Go to cPanel → File Manager"
echo "2. Navigate to: /home/hjqssnag/signinsoft1.gsgroups.net/"
echo "3. Upload: production/signinsoft-deploy.zip"
echo "4. Right-click → Extract → Extract Files"
echo "5. Delete the zip file after extraction"
echo ""
echo -e "${YELLOW}Step 2: Create Database${NC}"
echo "1. Go to cPanel → MySQL Databases"
echo "2. Create Database: hjqssnag_signinsoft"
echo "3. Create User: hjqssnag_signinsoft"
echo "4. Password: SignIn@2024"
echo "5. Add user to database with ALL PRIVILEGES"
echo "6. Go to phpMyAdmin"
echo "7. Select hjqssnag_signinsoft database"
echo "8. Import → Choose file: database-schema-basic.sql"
echo "9. Click 'Go' to import"
echo ""
echo -e "${YELLOW}Step 3: Setup Node.js Application${NC}"
echo "1. Go to cPanel → Node.js Apps"
echo "2. Click 'Create Application'"
echo "3. Set these values:"
echo "   • Node.js Version: Latest (18.x or higher)"
echo "   • Application Mode: Production"
echo "   • Application Root: /home/hjqssnag/signinsoft1.gsgroups.net"
echo "   • Application URL: (leave empty)"
echo "   • Application Startup File: server.js"
echo "4. Click 'Create'"
echo ""
echo -e "${YELLOW}Step 4: Set Environment Variables${NC}"
echo "1. In Node.js Apps, click on your application"
echo "2. Go to 'Environment Variables' tab"
echo "3. Add these variables:"
echo "   • NODE_ENV = production"
echo "   • PORT = 3000"
echo "   • DB_HOST = localhost"
echo "   • DB_NAME = hjqssnag_signinsoft"
echo "   • DB_USER = hjqssnag_signinsoft"
echo "   • DB_PASSWORD = SignIn@2024"
echo "   • API_BASE_URL = https://signinsoft1.gsgroups.net/api"
echo "   • CORS_ORIGIN = https://signinsoft1.gsgroups.net"
echo "   • JWT_SECRET = your-super-secret-jwt-key-change-this"
echo "4. Click 'Save'"
echo ""
echo -e "${YELLOW}Step 5: Install Dependencies${NC}"
echo "1. In Node.js Apps, click 'Open Terminal'"
echo "2. Run: npm install --production"
echo "3. Wait for installation to complete"
echo ""
echo -e "${YELLOW}Step 6: Start Application${NC}"
echo "1. In Node.js Apps, click 'Restart App'"
echo "2. Check that Status shows 'Running'"
echo "3. If it shows 'Stopped', click 'Start App'"
echo ""
echo -e "${YELLOW}Step 7: Enable SSL${NC}"
echo "1. Go to cPanel → SSL/TLS"
echo "2. Click 'Let's Encrypt SSL'"
echo "3. Select domain: signinsoft1.gsgroups.net"
echo "4. Click 'Issue'"
echo ""
echo -e "${GREEN}🎉 After completing these steps:${NC}"
echo "• Main Site: https://signinsoft1.gsgroups.net/"
echo "• API Health: https://signinsoft1.gsgroups.net/api/health"
echo "• Admin Panel: https://signinsoft1.gsgroups.net/admin"
echo ""
echo -e "${BLUE}📁 All required files are in the 'production' directory:${NC}"
echo "• signinsoft-deploy.zip (main application)"
echo "• database-schema-basic.sql (database structure)"
echo "• .env.production (environment template)"
echo ""
echo -e "${GREEN}The deployment package is ready - just follow the manual steps above!${NC}"