const http = require('http');
const port = process.env.PORT || 3005;

const server = http.createServer();

server.on('request', (req, res) => {
    try {

        const {
            method,
            url,
            headers
        } = req;

        switch (url) {

            default:
                
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