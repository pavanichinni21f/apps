#!/bin/bash

# Stop Production Container Script for SigninSoft Web Application

set -e  # Exit on any error

# Configuration
CONTAINER_NAME="signinsoft-web-prod"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🛑 Stopping SigninSoft Production Container${NC}"
echo "=========================================="

# Check if container exists and is running
if docker ps -q -f name="$CONTAINER_NAME" | grep -q .; then
    echo -e "${YELLOW}⏹️  Stopping container: $CONTAINER_NAME${NC}"
    docker stop "$CONTAINER_NAME"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Container stopped successfully${NC}"
    else
        echo -e "${RED}❌ Failed to stop container${NC}"
        exit 1
    fi
else
    echo -e "${YELLOW}ℹ️  Container $CONTAINER_NAME is not running${NC}"
fi

# Check if container exists (stopped)
if docker ps -aq -f name="$CONTAINER_NAME" | grep -q .; then
    echo -e "${YELLOW}🗑️  Removing container: $CONTAINER_NAME${NC}"
    docker rm "$CONTAINER_NAME"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Container removed successfully${NC}"
    else
        echo -e "${RED}❌ Failed to remove container${NC}"
        exit 1
    fi
else
    echo -e "${YELLOW}ℹ️  Container $CONTAINER_NAME does not exist${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Production container stopped and removed successfully!${NC}"
echo -e "${BLUE}💡 To start again, run: ./scripts/deploy-production.sh${NC}"