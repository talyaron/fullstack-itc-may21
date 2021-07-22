// console.log('Hi all');
// function multi(a,b) {return a*b};

// console.log(multi(5,7));

const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('<header style="background-color:red"> <h1>Hello, World!sddfsdkfjndsfkjsfdnskjcn</h1></header>'
            
  
  );
}

const server = http.createServer(requestListener);
server.listen(3000,()=>{console.log('Listen on port 3000')});





