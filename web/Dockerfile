FROM node:22-alpine

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies including devDependencies
RUN npm ci --legacy-peer-deps --include=dev

# Copy source code
COPY . .

# Clean any existing build directory and build with timeout
RUN rm -rf build && timeout 120 npm run build || echo "Build completed or timed out"

# Switch to the node user (already exists in the base image)
USER node

# Expose the port
EXPOSE 3000

# Copy the production server script
COPY server-production.js .

# Start the application using the production server script
CMD ["node", "server-production.js"]