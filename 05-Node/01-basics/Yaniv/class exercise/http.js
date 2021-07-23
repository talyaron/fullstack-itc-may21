const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`
  <h1>Hello, I'm an h1!</h1>
  <h2>Hello, I'm an h2!</h2>
  <h3>Hello, I'm an h3!</h3>
  <p>Hello, I'm a p!</p>
  <p style="color:pink">Hello, I'm a pink p!</p>
  `);
}

const server = http.createServer(requestListener);
const port = 3001;
server.listen(port,()=>{console.log(`Listen on port ${port}`)});