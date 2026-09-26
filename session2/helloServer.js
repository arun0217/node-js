const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.method === 'POST') {
    res.end('POST request received');
  } else if (req.method === 'GET' && req.url === '/products') {
    res.end('iPhone 14, Nike Shoes, Boat Headphones');
  } else {
    res.end('Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
