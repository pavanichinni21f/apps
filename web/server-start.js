import fs from 'fs';
import path from 'path';

// Function to create missing directories
function createMissingDirectories() {
  const requiredDirs = [
    './build/server/src',
    './build/server/src/app',
    './build/server/src/app/api'
  ];
  
  requiredDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Function to start the server
async function startServer() {
  try {
    // Create missing directories first
    createMissingDirectories();
    
    console.log('Importing server module...');
    // Import the server module
    const serverModule = await import('./build/server/index.js');
    
    // Get the default export (the server)
    const server = serverModule.default;
    
    console.log('Server export type:', typeof server);
    console.log('Server export keys:', server ? Object.keys(server) : 'null');
    
    if (server && typeof server === 'object' && server.fetch) {
      // This is a Hono app with fetch method
      const port = process.env.PORT || 3000;
      console.log(`Starting Hono server on port ${port}`);
      
      // Import serve from @hono/node-server
      const { serve } = await import('@hono/node-server');
      
      console.log('Starting server with serve...');
      serve({
        fetch: server.fetch,
        port: parseInt(port)
      });
      
      console.log(`Server running on http://localhost:${port}`);
      
      // Keep process alive
      setInterval(() => {}, 1000);
      
    } else if (server && typeof server === 'function') {
      // Call the server function to start it
      const port = process.env.PORT || 3000;
      console.log(`Starting server function on port ${port}`);
      await server();
      console.log(`Server running on http://localhost:${port}`);
      
    } else {
      console.error('Server module does not export a valid server');
      console.log('Server export type:', typeof server);
      console.log('Server export:', server);
      process.exit(1);
    }
  } catch (error) {
    console.error('Failed to start server:', error);
    console.error('Error stack:', error.stack);
    process.exit(1);
  }
}

// Start the server
startServer();