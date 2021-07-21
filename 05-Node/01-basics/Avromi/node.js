console.log("hi you foo");

const http = require('http');

const html = `<body>
<h1>Welcome</h1>

<p>here I can write some more HTML looking code and use it as a variable!!! YAY</p>

</body>`

const requestListener = function (req, res) {
    
  res.writeHead(200);
  const fs = require('fs');
  const file= fs.

  res.end(html);
}


const server = http.createServer(requestListener);
server.listen(3000,()=>{console.log('Listen on port 3000')});
