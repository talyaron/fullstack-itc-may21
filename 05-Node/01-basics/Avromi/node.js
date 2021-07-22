console.log("hi you foo");

const http = require('http');



const requestListener = function (req, res) {

    res.writeHead(200);
    const fs = require('fs');
    const file = fs.readFileSync('./index.html')
    console.log(file);
    res.end(file);
}


const server = http.createServer(requestListener);
server.listen(3000, () => {
    console.log('Listen on port 3000')
});