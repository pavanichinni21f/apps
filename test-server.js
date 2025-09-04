import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <html>
      <head><title>SignInSoft Web App</title></head>
      <body>
        <h1>SignInSoft Web App is Running!</h1>
        <p>Docker deployment successful</p>
        <p>Server running on port 3000</p>
      </body>
    </html>
  `);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Test server running on http://localhost:3000');
});