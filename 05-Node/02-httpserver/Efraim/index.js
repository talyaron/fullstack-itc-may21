const http = require('http');
const port = process.env.PORT || 3006;
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
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                const file = fs.readFileSync('index.html');
                res.end(file);
                console.log("poo")
                break;
            case '/about':
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                const aboutfile = fs.readFileSync('about.html');
                res.end(aboutfile);
                break;
            case '/contact':
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                const contactfile = fs.readFileSync('contact.html');
                res.end(contactfile);
                break;
                
            default:

                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });

                res.end('OK 3');
        }
    } catch (e) {
        console.log(e);

        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });

        res.end(`There is a sever error: ${e.message}`);
    }

})

server.listen(port, () => {
    console.log('Server listen on port', port)
})