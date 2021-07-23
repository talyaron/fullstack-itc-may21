const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    try {

        const {
            method,
            url,
            headers,
            body
        } = req;

        console.log('url:', url)
        console.log(method)

        switch (url) {

            case '/':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const main = fs.readFileSync('./index.html')
                res.end(main)
                break;

            case '/nodejs.png':
                res.writeHead(200, { 'Content-Type': 'image/png' });
                const nodejs = fs.readFileSync('./logo.png')
                res.end(nodejs)
                break
                
            case '/indexnode.css':
                res.writeHead(200, { 'Content-Type': 'text/css' });
                const style = fs.readFileSync('./index.css')
                res.end(style)
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