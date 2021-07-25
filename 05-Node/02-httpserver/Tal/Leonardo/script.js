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
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const file1 = fs.readFileSync('./index.html')
                res.end(file1);
                break;

            case '/about':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const file2 = fs.readFileSync('./about.html')
                res.end(file2);
                break;

            case '/hobbies':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const file3 = fs.readFileSync('./hobbies.html')
                res.end(file3);
                break;

            case '/styles':
                res.writeHead(200, { 'Content-Type': 'text/css' });
                const file4 = fs.readFileSync('./styles.css')
                res.end(file4);
                break;

            case '/dog':
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                const file5 = fs.readFileSync('./img/dogSiberiano.jpg')
                res.end(file5);
                break;

            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('The request resource was not found')
        }

    } catch (e) {
        console.log(e);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`There is a sever error: ${e.message}`);
    }
})

server.listen(port, () => {
    console.log(`The port is serving in port ${port}`)
})