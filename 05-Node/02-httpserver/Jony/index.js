const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8081;

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

            case '/main':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const main = fs.readFileSync('./index.html')
                res.end(main)
                break;
                
            case '/about':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const about = fs.readFileSync('./about.html')
                res.end(about)
                break;

            case '/treee.jpg':
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                const flower = fs.readFileSync('./tree.jpg')
                res.end(flower)
                break 

            case '/contact':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const contact = fs.readFileSync('./contact.html')
                res.end(contact)
                break;
                

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