const http = require('http');
const port = process.env.PORT || 3001;
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
    try {

        const {
            method,
            url,
            headers
        } = req;

        switch (url) {
           case '/':
               res.writeHead(200,{'Content-Type':'text/html'});
               const file=fs.readFileSync('./index.html')
               res.end(file);
             break;
               case '/index2':
               res.writeHead(200,{'Content-Type':'text/html'});
               const file1=fs.readFileSync('./index2.html')
               res.end(file1);
               break;
            default:
                throw new Error("boom");
                res.writeHead(200, { 'Content-Type': 'text/plain' });

                res.end('OK 3');
        }
    } catch (e) {
        console.log(e);

        res.writeHead(500, { 'Content-Type': 'text/plain' });

        res.end(`There is a sever error: ${e.message}`);
    }

})

server.listen(port, () => {
    console.log('Server listen on port', port)
})




