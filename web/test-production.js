import { serve } from '@hono/node-server';

const PORT = process.env.PORT || 3000;

console.log("🚀 Testing production server import...");
console.log("📁 Current directory:", process.cwd());
console.log("🔧 Node version:", process.version);
console.log("🌍 Environment:", process.env.NODE_ENV || 'development');
console.log("🔌 Port:", PORT);

try {
  console.log("📦 Importing server build...");
  const serverBuild = await import("./build/server/index.js");
  console.log("✅ Server build imported successfully");
  console.log("🔍 Available exports:", Object.keys(serverBuild));
  
  if (serverBuild.default) {
    console.log("🎯 Found default export");
    console.log("🔍 Default export type:", typeof serverBuild.default);
    console.log("🔍 Default export constructor:", serverBuild.default.constructor?.name);
    
    if (typeof serverBuild.default.fetch === 'function') {
      console.log("✅ Server has fetch method, starting server...");
      
      const server = serve({
        fetch: serverBuild.default.fetch,
        port: PORT,
        hostname: '0.0.0.0'
      });
      
      console.log(`🎉 Server successfully running on http://0.0.0.0:${PORT}`);
      console.log(`🌐 Access your app at: http://localhost:${PORT}`);
      
      // Keep server running
      process.on('SIGTERM', () => {
        console.log('📴 Received SIGTERM, shutting down...');
        server.close(() => {
          console.log('✅ Server closed');
          process.exit(0);
        });
      });
      
      process.on('SIGINT', () => {
        console.log('📴 Received SIGINT, shutting down...');
        server.close(() => {
          console.log('✅ Server closed');
          process.exit(0);
        });
      });
      
    } else {
      console.error("❌ Server default export doesn't have fetch method");
      console.log("🔍 Available methods:", Object.getOwnPropertyNames(serverBuild.default));
      process.exit(1);
    }
  } else {
    console.error("❌ No default export found");
    process.exit(1);
  }
  
} catch (error) {
  console.error("💥 Error:", error.message);
  console.error("📚 Stack:", error.stack);
  process.exit(1);
}