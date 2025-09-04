#!/bin/bash

# Production Deployment Script for SigninSoft Web Application
# This script builds and deploys the production Docker container

set -e  # Exit on any error

# Configuration
IMAGE_NAME="signinsoft-web:production"
CONTAINER_NAME="signinsoft-web-prod"
HOST_PORT="3001"
CONTAINER_PORT="4000"
ENV_FILE=".env.production"
DOCKERFILE="Dockerfile.production"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting SigninSoft Production Deployment${NC}"
echo "==========================================="

# Check if we're in the web directory
if [ ! -f "package.json" ] || [ ! -f "$DOCKERFILE" ]; then
    echo -e "${RED}❌ Error: Please run this script from the web directory${NC}"
    echo "Expected files: package.json, $DOCKERFILE"
    exit 1
fi

# Check if environment file exists
if [ ! -f "$ENV_FILE" ]; then
    echo -e "${RED}❌ Error: Environment file $ENV_FILE not found${NC}"
    echo "Please create the environment file before deploying"
    exit 1
fi

# Stop existing container if running
echo -e "${YELLOW}🔍 Checking for existing containers...${NC}"
if docker ps -q -f name="$CONTAINER_NAME" | grep -q .; then
    echo -e "${YELLOW}⏹️  Stopping existing container: $CONTAINER_NAME${NC}"
    docker stop "$CONTAINER_NAME" || true
fi

# Remove existing container if exists
if docker ps -aq -f name="$CONTAINER_NAME" | grep -q .; then
    echo -e "${YELLOW}🗑️  Removing existing container: $CONTAINER_NAME${NC}"
    docker rm "$CONTAINER_NAME" || true
fi

# Build the Docker image
echo -e "${BLUE}🔨 Building Docker image: $IMAGE_NAME${NC}"
docker build -f "$DOCKERFILE" -t "$IMAGE_NAME" .

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Docker image built successfully${NC}"
else
    echo -e "${RED}❌ Failed to build Docker image${NC}"
    exit 1
fi

# Check if port is available
echo -e "${YELLOW}🔍 Checking if port $HOST_PORT is available...${NC}"
if lsof -Pi :$HOST_PORT -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${RED}❌ Port $HOST_PORT is already in use${NC}"
    echo "Please stop the service using this port or choose a different port"
    echo "To see what's using the port: lsof -i :$HOST_PORT"
    exit 1
fi

# Start the container
echo -e "${BLUE}🚀 Starting production container...${NC}"
docker run -d \
    --name "$CONTAINER_NAME" \
    -p "$HOST_PORT:$CONTAINER_PORT" \
    --env-file "$ENV_FILE" \
    --restart unless-stopped \
    "$IMAGE_NAME"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Container started successfully${NC}"
else
    echo -e "${RED}❌ Failed to start container${NC}"
    exit 1
fi

# Wait for the application to start
echo -e "${YELLOW}⏳ Waiting for application to start...${NC}"
sleep 10

# Check if container is still running
if docker ps -q -f name="$CONTAINER_NAME" | grep -q .; then
    echo -e "${GREEN}✅ Container is running successfully${NC}"
    
    # Display container information
    echo ""
    echo -e "${BLUE}📋 Deployment Information${NC}"
    echo "========================"
    echo "Container Name: $CONTAINER_NAME"
    echo "Image: $IMAGE_NAME"
    echo "Host Port: $HOST_PORT"
    echo "Container Port: $CONTAINER_PORT"
    echo "Environment File: $ENV_FILE"
    echo ""
    echo -e "${GREEN}🌐 Application URL: http://localhost:$HOST_PORT${NC}"
    echo ""
    echo -e "${BLUE}📝 Useful Commands:${NC}"
    echo "View logs: docker logs $CONTAINER_NAME"
    echo "Follow logs: docker logs -f $CONTAINER_NAME"
    echo "Stop container: docker stop $CONTAINER_NAME"
    echo "Restart container: docker restart $CONTAINER_NAME"
    echo "Remove container: docker rm $CONTAINER_NAME"
    
else
    echo -e "${RED}❌ Container failed to start or exited unexpectedly${NC}"
    echo "Checking logs..."
    docker logs "$CONTAINER_NAME"
    exit 1
fi

echo ""
echo -e "${GREEN}🎉 Production deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Your application is now running at: http://localhost:$HOST_PORT${NC}"