const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(`User Connected. HTTP Version: ${req.httpVersion} Method: ${req.method} URL: ${req.url} Remote Host: ${req.socket.remoteAddress}`);
  res.writeHead(200, { 'content-type': 'text/html' });
  if(req.url === "/") {
    fs.createReadStream('index.html').pipe(res);
  }
  if (req.url === "/dist/main.js") {
    fs.createReadStream('./dist/main.js').pipe(res); 
  }
  if (req.url === "/jquery.min.js") {
    fs.createReadStream('./jquery.min.js').pipe(res); 
  }
});

server.listen(3000);
console.log("Listening on port 3000.");