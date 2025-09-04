import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3000;

console.log("🚀 Starting Debug React Router v7 Hono production server...");
console.log("📁 Current directory:", process.cwd());
console.log("🔧 Node version:", process.version);
console.log("🌍 Environment:", process.env.NODE_ENV || 'development');
console.log("🔌 Port:", PORT);

// Enhanced error handling
process.on('uncaughtException', (error) => {
  console.error("💥 Uncaught Exception:", error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error("💥 Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

async function startServer() {
  try {
    console.log("📦 Importing server build...");
    
    // Check if build directory exists
    const buildPath = join(process.cwd(), "build", "server", "index.js");
    console.log("🔍 Looking for server build at:", buildPath);
    
    const serverBuild = await import(buildPath);
    console.log("✅ Server build imported successfully");
    console.log("🔍 Server build keys:", Object.keys(serverBuild));
    console.log("🔍 Default export type:", typeof serverBuild.default);
    
    if (serverBuild.default) {
      console.log("🔍 Default export properties:", Object.getOwnPropertyNames(serverBuild.default));
      console.log("🔍 Default export prototype:", Object.getOwnPropertyNames(Object.getPrototypeOf(serverBuild.default)));
      
      // Check if it has a fetch method (Hono app)
      if (typeof serverBuild.default.fetch === 'function') {
        console.log("🎯 Found Hono app with fetch method, starting server...");
        
        const { serve } = await import('@hono/node-server');
        console.log("📡 Starting server on port", PORT);
        
        const server = serve({
          fetch: serverBuild.default.fetch,
          port: PORT,
        });
        
        console.log(`✅ Server successfully running on http://localhost:${PORT}`);
        console.log(`🌐 Access your app at: http://localhost:${PORT}`);
        
        // Handle graceful shutdown
        process.on('SIGTERM', () => {
          console.log('📴 Received SIGTERM, shutting down gracefully');
          server.close(() => {
            process.exit(0);
          });
        });
        
      }
      // Check if it has a listen method (direct server)
      else if (typeof serverBuild.default.listen === 'function') {
        console.log("🎯 Starting server with listen method...");
        serverBuild.default.listen(PORT, () => {
          console.log(`✅ Server successfully running on http://localhost:${PORT}`);
          console.log(`🌐 Access your app at: http://localhost:${PORT}`);
        });
      }
      else {
        console.error("❌ Server build default export doesn't have fetch or listen method");
        console.log("🔍 Available methods:", Object.getOwnPropertyNames(serverBuild.default));
        console.log("🔍 Prototype methods:", Object.getOwnPropertyNames(Object.getPrototypeOf(serverBuild.default)));
        
        // Try to call it directly if it's a function
        if (typeof serverBuild.default === 'function') {
          console.log("🔄 Trying to call default export as function...");
          const result = await serverBuild.default();
          console.log("🔍 Function result:", typeof result, result);
        }
        
        process.exit(1);
      }
    } else {
      console.error("❌ No default export found in server build");
      console.log("🔍 Available exports:", Object.keys(serverBuild));
      process.exit(1);
    }
    
  } catch (error) {
    console.error("💥 Failed to import or start server:");
    console.error("🏷️  Error name:", error.name);
    console.error("📝 Error message:", error.message);
    console.error("📚 Error stack:", error.stack);
    console.error("🔍 Error cause:", error.cause);
    process.exit(1);
  }
}

// Start the server
console.log("🚀 Calling startServer()...");
startServer().catch((error) => {
  console.error("💥 StartServer failed:", error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('📴 SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('📴 SIGINT received, shutting down gracefully');
  process.exit(0);
});

console.log("🎬 Debug server script loaded, waiting for async operations...");