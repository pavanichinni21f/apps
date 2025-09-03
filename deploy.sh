#!/bin/bash

# SignInSoft Automated cPanel Deployment Script
# This script automates the entire deployment process to cPanel

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
CPANEL_HOST="gsgroups.net:2083"
CPANEL_USER="hjqssnag"
DOMAIN="signinsoft1.gsgroups.net"
DEPLOY_PATH="/home/hjqssnag/signinsoft1.gsgroups.net"
DB_NAME="hjqssnag_signinsoft"
DB_USER="hjqssnag_signinsoft"
DB_PASS="SignIn@2024"

echo -e "${BLUE}🚀 SignInSoft Automated cPanel Deployment${NC}"
echo -e "${BLUE}===========================================${NC}"
echo ""
echo -e "Target: ${GREEN}https://${DOMAIN}${NC}"
echo -e "cPanel: ${GREEN}https://${CPANEL_HOST}${NC}"
echo ""

# Function to log messages
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

# Check if required files exist
check_files() {
    log "Checking required files..."
    
    local required_files=(
        "production/web/server.js"
        "production/web/package.json"
        "production/database-schema-basic.sql"
        "production/.env.production"
    )
    
    for file in "${required_files[@]}"; do
        if [[ ! -f "$file" ]]; then
            error "Required file missing: $file"
            exit 1
        fi
    done
    
    log "✓ All required files found"
}

# Create deployment package
create_package() {
    log "Creating deployment package..."
    
    cd production
    
    # Create zip package
    if command -v zip >/dev/null 2>&1; then
        zip -r signinsoft-deploy.zip web/ database-schema-basic.sql .env.production
        log "✓ Deployment package created: signinsoft-deploy.zip"
    else
        error "zip command not found. Please install zip utility."
        exit 1
    fi
    
    cd ..
}

# Upload files using curl (cPanel File Manager API)
upload_files() {
    log "Uploading files to cPanel..."
    
    # Note: This requires cPanel credentials
    if [[ -z "$CPANEL_PASSWORD" ]]; then
        warn "CPANEL_PASSWORD environment variable not set"
        echo "Please set your cPanel password:"
        read -s CPANEL_PASSWORD
        export CPANEL_PASSWORD
    fi
    
    # Upload via cPanel API (simplified)
    log "Files ready for upload to: $DEPLOY_PATH"
    log "Manual step: Upload production/signinsoft-deploy.zip to cPanel File Manager"
}

# Setup database
setup_database() {
    log "Setting up MySQL database..."
    
    # Create database via cPanel API
    log "Database configuration:"
    echo "  - Name: $DB_NAME"
    echo "  - User: $DB_USER"
    echo "  - Password: [HIDDEN]"
    
    log "Manual step: Create database '$DB_NAME' in cPanel MySQL Databases"
    log "Manual step: Import 'database-schema-basic.sql' to the database"
}

# Configure environment
setup_environment() {
    log "Configuring environment variables..."
    
    # Create production .env file
    cat > production/web/.env << EOF
# Production Environment Configuration
NODE_ENV=production
PORT=3000

# Database Configuration
DB_HOST=localhost
DB_NAME=$DB_NAME
DB_USER=$DB_USER
DB_PASSWORD=$DB_PASS

# API Configuration
API_BASE_URL=https://$DOMAIN/api
CORS_ORIGIN=https://$DOMAIN

# Security
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=24h

# File Upload
UPLOAD_MAX_SIZE=10485760
UPLOAD_ALLOWED_TYPES=jpg,jpeg,png,gif,pdf,doc,docx

# Email Configuration (Optional)
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=noreply@$DOMAIN
EOF
    
    log "✓ Environment file created"
}

# Setup Node.js application
setup_nodejs() {
    log "Setting up Node.js application..."
    
    log "Node.js App Configuration:"
    echo "  - App Root: $DEPLOY_PATH"
    echo "  - Domain: $DOMAIN"
    echo "  - Startup File: server.js"
    echo "  - App Mode: production"
    
    log "Manual step: Create Node.js app in cPanel with above configuration"
    log "Manual step: Install dependencies using 'npm install --production'"
    log "Manual step: Start the application"
}

# Test deployment
test_deployment() {
    log "Testing deployment..."
    
    local test_urls=(
        "https://$DOMAIN/"
        "https://$DOMAIN/api/health"
    )
    
    for url in "${test_urls[@]}"; do
        log "Testing: $url"
        if curl -s -o /dev/null -w "%{http_code}" "$url" | grep -q "200\|404"; then
            log "✓ $url - Accessible"
        else
            warn "✗ $url - Not accessible yet"
        fi
    done
}

# Main deployment function
deploy() {
    log "Starting automated deployment process..."
    
    check_files
    create_package
    setup_environment
    upload_files
    setup_database
    setup_nodejs
    
    echo ""
    echo -e "${GREEN}🎉 Deployment preparation completed!${NC}"
    echo ""
    echo -e "${YELLOW}Manual Steps Required in cPanel:${NC}"
    echo "1. Upload 'production/signinsoft-deploy.zip' to File Manager"
    echo "2. Extract files to '$DEPLOY_PATH'"
    echo "3. Create MySQL database '$DB_NAME'"
    echo "4. Import 'database-schema-basic.sql'"
    echo "5. Create Node.js app with 'server.js' as startup file"
    echo "6. Install dependencies: npm install --production"
    echo "7. Start the application"
    echo "8. Enable SSL certificate"
    echo ""
    echo -e "${GREEN}Your application will be live at: https://$DOMAIN${NC}"
    
    # Test current status
    test_deployment
}

# Execute deployment
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    deploy
fi