const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
  res.writeHead(200);
  //read the file from the computer, and send it to the client
  const file = fs.readFileSync('./index.html');
  
  res.end(file);

  res.end(`<h1>PEPE</h1>`)

  
}

const server = http.createServer(requestListener);
server.listen(3000,()=>{console.log('Listen on port 3000')});
