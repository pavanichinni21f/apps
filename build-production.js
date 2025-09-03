#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Building SignInSoft for Production...');

// Create production directories
const productionDir = path.join(__dirname, 'production');
const webBuildDir = path.join(productionDir, 'web');
const mobileBuildDir = path.join(productionDir, 'mobile');

// Clean and create directories
if (fs.existsSync(productionDir)) {
  fs.rmSync(productionDir, { recursive: true, force: true });
}
fs.mkdirSync(productionDir, { recursive: true });
fs.mkdirSync(webBuildDir, { recursive: true });
fs.mkdirSync(mobileBuildDir, { recursive: true });

console.log('📁 Created production directories');

// Copy backend files
const backendFiles = [
  'server.js',
  'package.json',
  'package-lock.json',
  '.env.production',
  'database-schema.sql',
  'database-schema-basic.sql'
];

const backendDirs = [
  'config',
  'middleware',
  'models',
  'routes',
  'utils'
];

// Copy backend files
backendFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(webBuildDir, file));
    console.log(`✅ Copied ${file}`);
  }
});

// Copy backend directories
backendDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.cpSync(dir, path.join(webBuildDir, dir), { recursive: true });
    console.log(`✅ Copied ${dir}/`);
  }
});

// Create uploads directory structure
const uploadsDir = path.join(webBuildDir, 'uploads');
fs.mkdirSync(uploadsDir, { recursive: true });
const uploadSubDirs = ['profiles', 'resumes', 'documents', 'companies', 'projects', 'content', 'temp'];
uploadSubDirs.forEach(subDir => {
  fs.mkdirSync(path.join(uploadsDir, subDir), { recursive: true });
});
console.log('✅ Created uploads directory structure');

// Build web frontend
console.log('🔨 Building web frontend...');
try {
  process.chdir('web');
  execSync('npm install', { stdio: 'inherit' });
  execSync('npm run build', { stdio: 'inherit' });
  
  // Copy web build to production
  const webDistDir = path.join(__dirname, 'web', 'dist');
  if (fs.existsSync(webDistDir)) {
    fs.cpSync(webDistDir, path.join(webBuildDir, 'public'), { recursive: true });
    console.log('✅ Web frontend built and copied');
  }
  
  process.chdir('..');
} catch (error) {
  console.error('❌ Web build failed:', error.message);
  process.chdir('..');
}

// Build mobile app
console.log('📱 Preparing mobile app...');
try {
  process.chdir('mobile');
  
  // Copy mobile source files
  const mobileFiles = [
    'package.json',
    'package-lock.json',
    'app.json',
    'eas.json',
    'metro.config.js',
    'tsconfig.json'
  ];
  
  const mobileDirs = [
    'src',
    'assets',
    'android',
    'ios'
  ];
  
  mobileFiles.forEach(file => {
    if (fs.existsSync(file)) {
      fs.copyFileSync(file, path.join(mobileBuildDir, file));
    }
  });
  
  mobileDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.cpSync(dir, path.join(mobileBuildDir, dir), { recursive: true });
    }
  });
  
  console.log('✅ Mobile app files copied');
  process.chdir('..');
} catch (error) {
  console.error('❌ Mobile preparation failed:', error.message);
  process.chdir('..');
}

// Create deployment instructions
const deploymentInstructions = `# SignInSoft Deployment Instructions

## Web Application (Backend + Frontend)

### Files included in web.zip:
- Backend API server (Node.js/Express)
- Frontend build files
- Database schema files
- Configuration files

### Deployment Steps:
1. Upload web.zip to your cPanel File Manager
2. Extract the contents to your domain's public_html folder
3. Install Node.js dependencies: npm install
4. Configure database settings in .env file
5. Import database schema using phpMyAdmin
6. Start the application: node server.js

## Mobile Application

### Files included in mobile.zip:
- React Native/Expo source code
- Configuration files
- Build configurations for iOS and Android

### Build Steps:
1. Extract mobile.zip
2. Install dependencies: npm install
3. Configure API endpoints in the app
4. Build for Android: expo build:android
5. Build for iOS: expo build:ios

For detailed deployment instructions, see DEPLOYMENT.md
`;

fs.writeFileSync(path.join(productionDir, 'README.md'), deploymentInstructions);

// Create zip files
console.log('📦 Creating zip files...');
try {
  process.chdir(productionDir);
  execSync('zip -r web.zip web/', { stdio: 'inherit' });
  execSync('zip -r mobile.zip mobile/', { stdio: 'inherit' });
  console.log('✅ Created web.zip and mobile.zip');
  process.chdir('..');
} catch (error) {
  console.error('❌ Zip creation failed:', error.message);
  process.chdir('..');
}

console.log('🎉 Production build completed!');
console.log('📁 Files created:');
console.log('  - production/web.zip (Backend + Frontend)');
console.log('  - production/mobile.zip (Mobile App)');
console.log('  - production/README.md (Deployment Instructions)');