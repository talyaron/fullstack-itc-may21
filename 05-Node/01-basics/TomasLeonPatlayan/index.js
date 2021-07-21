const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('<h1>Hello, World!</h1><h2>PEPE</h2>');
}

const server = http.createServer(requestListener);
server.listen(3000,()=>{console.log('Listen on port 3000')});
