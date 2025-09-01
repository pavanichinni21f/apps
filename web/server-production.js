import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3000;

console.log("Starting React Router v7 Hono production server...");
console.log("Current directory:", process.cwd());
console.log("Node version:", process.version);
console.log("Environment:", process.env.NODE_ENV || 'development');

// Add uncaught exception handlers
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

async function startServer() {
  try {
    console.log("Importing server build...");
    const serverBuild = await import("./build/server/index.js");
    console.log("✅ Server build imported successfully");
    console.log("Server build keys:", Object.keys(serverBuild));
    console.log("Default export type:", typeof serverBuild.default);
    
    if (serverBuild.default) {
      console.log("Default export keys:", Object.keys(serverBuild.default));
      console.log("Default export constructor:", serverBuild.default.constructor.name);
      
      // Check if it's a Hono app with fetch method
      if (typeof serverBuild.default.fetch === 'function') {
        console.log("🚀 Starting Hono server with fetch method...");
        const { serve } = await import("@hono/node-server");
        const server = serve({
          fetch: serverBuild.default.fetch,
          port: PORT
        }, (info) => {
          console.log(`✅ Server successfully running on http://localhost:${info.port}`);
          console.log(`🌐 Access your app at: http://localhost::${info.port}`);
        });
        
        // Keep the process alive
        process.on('SIGTERM', () => {
          console.log('Received SIGTERM, shutting down gracefully');
          server.close(() => {
            process.exit(0);
          });
        });
        
      }
      // Check if it has a listen method (direct server)
      else if (typeof serverBuild.default.listen === 'function') {
        console.log("🚀 Starting server with listen method...");
        serverBuild.default.listen(PORT, () => {
          console.log(`✅ Server successfully running on http://localhost:${PORT}`);
          console.log(`🌐 Access your app at: http://localhost:${PORT}`);
        });
      }
      else {
        console.error("❌ Server build default export doesn't have fetch or listen method");
        console.log("Available methods:", Object.getOwnPropertyNames(serverBuild.default));
        console.log("Prototype methods:", Object.getOwnPropertyNames(Object.getPrototypeOf(serverBuild.default)));
        process.exit(1);
      }
    } else {
      console.error("❌ No default export found in server build");
      process.exit(1);
    }
    
  } catch (error) {
    console.error("❌ Failed to import or start server:");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    process.exit(1);
  }
}

// Start the server
startServer();

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});