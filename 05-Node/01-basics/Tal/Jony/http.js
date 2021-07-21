const http = require('http')

const requestListener = function (req,res){
    res.writeHead(200);
    res.end('<header style="background-color:red"><h1>Hello <strong style="color:blue">World!</strong></h1></header>')
}

const server = http.createServer(requestListener)
server.listen(3000, ()=>{console.log('Listen on port 3000')})


