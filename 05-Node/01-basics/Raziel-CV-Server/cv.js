const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    try {

        const {url} = req;

        switch (url) {

            case '/':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const main = fs.readFileSync('./cv.html')
                res.end(main)
                break;

            case '/nodejs':
                res.writeHead(200, { 'Content-Type': 'image/png' });
                const nodejs = fs.readFileSync('./profile.png')
                res.end(nodejs)
                break

            

            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('The requested resource was not found');
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