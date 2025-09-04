# Production Deployment Guide

## Overview

This guide covers the production deployment of the SigninSoft web application using Docker. Due to database connection issues with the production build, we use the development server as a stable workaround.

## Prerequisites

- Docker installed and running
- Node.js 22+ (for local development)
- Access to the project repository

## Quick Start

### 1. Build Production Image

```bash
cd web
docker build -f Dockerfile.production -t signinsoft-web:production .
```

### 2. Run Production Container

```bash
docker run --rm -p 3001:4000 --env-file .env.production signinsoft-web:production
```

The application will be available at: http://localhost:3001

## Configuration

### Environment Variables

The production environment is configured via `.env.production`:

- **PORT**: 4000 (internal container port)
- **NODE_ENV**: production
- **DATABASE_URL**: file:./production.db (SQLite for stability)
- **AUTH_SECRET**: Change in production
- **JWT_SECRET**: Change in production
- **SESSION_SECRET**: Change in production

### Security Notes

⚠️ **Important**: Update all secret keys before deploying to production:

```bash
# Generate secure secrets
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Docker Configuration

### Production Dockerfile Features

- Based on Node.js 22 Alpine Linux
- Non-root user execution
- Health checks enabled
- SQLite support included
- Development dependencies included (required for dev server workaround)

### Port Mapping

- Container internal port: 4000
- Host port: 3001 (configurable)
- Health check endpoint: http://localhost:4000/

## Deployment Scripts

Use the provided deployment scripts for automated deployment:

```bash
# Build and start production
./scripts/deploy-production.sh

# Stop production container
./scripts/stop-production.sh

# View logs
./scripts/logs-production.sh
```

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Check what's using the port
   lsof -i :3001
   # Kill the process or use a different port
   docker run --rm -p 3002:4000 --env-file .env.production signinsoft-web:production
   ```

2. **Database Issues**
   - The production setup uses SQLite for stability
   - Database file is created automatically in the container
   - For persistent data, mount a volume: `-v $(pwd)/data:/app/data`

3. **Memory Issues**
   ```bash
   # Limit container memory
   docker run --rm -p 3001:4000 --memory=1g --env-file .env.production signinsoft-web:production
   ```

### Logs and Monitoring

```bash
# View container logs
docker logs <container_id>

# Follow logs in real-time
docker logs -f <container_id>

# Check container health
docker ps
```

## Production Notes

### Current Architecture

- **Server**: React Router v7 with Hono
- **Runtime**: Development server (workaround for production build issues)
- **Database**: SQLite (file-based)
- **Authentication**: Auth.js integration
- **File Uploads**: Local filesystem storage

### Known Limitations

1. **Production Build**: The standard production build has database connection timeout issues
2. **Workaround**: Using development server in production mode for stability
3. **Performance**: Development server may have slightly higher memory usage
4. **Scaling**: Single container deployment (horizontal scaling requires load balancer)

### Future Improvements

- [ ] Resolve production build database connection issues
- [ ] Implement proper production build deployment
- [ ] Add container orchestration (Docker Compose/Kubernetes)
- [ ] Implement database migrations
- [ ] Add monitoring and logging solutions
- [ ] Set up CI/CD pipeline

## Support

For deployment issues or questions, refer to:
- Application logs in the container
- Docker container health status
- Environment variable configuration
- Network connectivity between services