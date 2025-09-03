#!/bin/bash

# Final Deployment Execution Script
# This script performs the complete automated deployment to cPanel

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 SignInSoft Complete Deployment Automation${NC}"
echo -e "${BLUE}=============================================${NC}"
echo ""
echo -e "Target: ${GREEN}https://signinsoft.app${NC}"
echo -e "cPanel: ${GREEN}https://s3741.bom1.stableserver.net:2083${NC}"
echo ""

# Check if deployment package exists
if [[ ! -f "production/signinsoft-deploy.zip" ]]; then
    echo -e "${YELLOW}Creating deployment package...${NC}"
    ./deploy.sh
fi

# Get cPanel password
if [[ -z "$CPANEL_PASSWORD" ]]; then
    echo -e "${YELLOW}Enter your cPanel password:${NC}"
    read -s CPANEL_PASSWORD
    export CPANEL_PASSWORD
fi

echo -e "${GREEN}Starting automated deployment...${NC}"
echo ""

# Method 1: Try automated deployment
echo -e "${BLUE}Attempting automated deployment via cPanel API...${NC}"
if CPANEL_PASSWORD="$CPANEL_PASSWORD" node cpanel-deploy.js; then
    echo -e "${GREEN}✅ Automated deployment successful!${NC}"
    echo -e "${GREEN}🌐 Your application is live at: https://signinsoft.app${NC}"
    exit 0
fi

# Method 2: Manual deployment with detailed instructions
echo -e "${YELLOW}Automated deployment failed. Providing manual deployment instructions...${NC}"
echo ""
echo -e "${BLUE}Manual Deployment Steps:${NC}"
echo ""
echo "1. 📁 Upload Files:"
echo "   - Go to cPanel File Manager"
echo "   - Navigate to /home/hjqssnag/signinsoft1.gsgroups.net/"
echo "   - Upload production/signinsoft-deploy.zip"
echo "   - Extract the zip file"
echo ""
echo "2. 🗄️ Setup Database:"
echo "   - Go to cPanel MySQL Databases"
echo "   - Create database: hjqssnag_signinsoft"
echo "   - Create user: hjqssnag_signinsoft (password: SignIn@2024)"
echo "   - Import production/database-schema-basic.sql"
echo ""
echo "3. ⚙️ Configure Node.js App:"
echo "   - Go to cPanel Node.js Apps"
echo "   - Create new app:"
echo "     * App Root: /home/hjqssnag/signinsoft1.gsgroups.net"
echo "     * Domain: signinsoft1.gsgroups.net"
echo "     * Startup File: server.js"
echo "     * App Mode: production"
echo "   - Set environment variables:"
echo "     * NODE_ENV=production"
echo "     * DB_HOST=localhost"
echo "     * DB_NAME=hjqssnag_signinsoft"
echo "     * DB_USER=hjqssnag_signinsoft"
echo "     * DB_PASSWORD=SignIn@2024"
echo "     * API_BASE_URL=https://signinsoft.app/api"
echo "   - Install dependencies: npm install --production"
echo "   - Start the application"
echo ""
echo "4. 🔒 Enable SSL:"
echo "   - Go to cPanel SSL/TLS"
echo "   - Enable Let's Encrypt for signinsoft.app"
echo ""
echo -e "${GREEN}After completing these steps, your application will be live!${NC}"
echo ""
echo -e "${BLUE}Test URLs:${NC}"
echo "• https://signinsoft.app/"
echo "• https://signinsoft.app/api/health"
echo "• https://signinsoft.app/api/auth/register"
echo ""
echo -e "${GREEN}All deployment files are ready in the 'production' directory.${NC}"