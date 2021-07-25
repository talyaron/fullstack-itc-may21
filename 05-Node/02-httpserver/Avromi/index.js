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
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                const homeFile = fs.readFileSync('./home.html')
                res.end(homeFile)
                break;
            case '/about':
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
               
                const aboutFile = fs.readFileSync('./about.html')
                res.end(aboutFile)
                break;
            case '/contact':
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                const contactFile = fs.readFileSync(`./contact.html`)
                res.end(contactFile)
                break;
                case '/profile.img':
                    res.writeHead(200, {
                        'Content-Type': 'image/png'
                    });
                    const imageFile = fs.readFileSync(`./profile.png`)
                    res.end(imageFile)
                    break;
            default:
                throw new Error("boooooooooooom");
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