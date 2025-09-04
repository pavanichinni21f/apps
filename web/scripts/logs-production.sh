#!/bin/bash

# View Production Container Logs Script for SigninSoft Web Application

set -e  # Exit on any error

# Configuration
CONTAINER_NAME="signinsoft-web-prod"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default options
FOLLOW=false
TAIL_LINES=100

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -f|--follow)
            FOLLOW=true
            shift
            ;;
        -n|--tail)
            TAIL_LINES="$2"
            shift 2
            ;;
        -h|--help)
            echo "Usage: $0 [OPTIONS]"
            echo "View logs from the SigninSoft production container"
            echo ""
            echo "Options:"
            echo "  -f, --follow     Follow log output (like tail -f)"
            echo "  -n, --tail NUM   Number of lines to show from the end (default: 100)"
            echo "  -h, --help       Show this help message"
            echo ""
            echo "Examples:"
            echo "  $0                    # Show last 100 lines"
            echo "  $0 -f                # Follow logs in real-time"
            echo "  $0 -n 50             # Show last 50 lines"
            echo "  $0 -f -n 200         # Follow logs, starting with last 200 lines"
            exit 0
            ;;
        *)
            echo -e "${RED}❌ Unknown option: $1${NC}"
            echo "Use -h or --help for usage information"
            exit 1
            ;;
    esac
done

echo -e "${BLUE}📋 SigninSoft Production Container Logs${NC}"
echo "======================================="

# Check if container exists
if ! docker ps -aq -f name="$CONTAINER_NAME" | grep -q .; then
    echo -e "${RED}❌ Container $CONTAINER_NAME does not exist${NC}"
    echo "Run ./scripts/deploy-production.sh to create and start the container"
    exit 1
fi

# Check if container is running
if docker ps -q -f name="$CONTAINER_NAME" | grep -q .; then
    echo -e "${GREEN}✅ Container is running${NC}"
else
    echo -e "${YELLOW}⚠️  Container exists but is not running${NC}"
fi

echo -e "${BLUE}📝 Container: $CONTAINER_NAME${NC}"
if [ "$FOLLOW" = true ]; then
    echo -e "${BLUE}📝 Mode: Following logs (Press Ctrl+C to exit)${NC}"
else
    echo -e "${BLUE}📝 Mode: Showing last $TAIL_LINES lines${NC}"
fi
echo "======================================="
echo ""

# Show logs
if [ "$FOLLOW" = true ]; then
    docker logs -f --tail "$TAIL_LINES" "$CONTAINER_NAME"
else
    docker logs --tail "$TAIL_LINES" "$CONTAINER_NAME"
fi