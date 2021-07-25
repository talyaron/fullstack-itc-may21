const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 5000;

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

            case '/index':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const index = fs.readFileSync('./index.html')
                res.end(index)
                break;
                
            case '/about':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const about = fs.readFileSync('./about.html')
                res.end(about)
                break;

                case '/contact':
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    const contact = fs.readFileSync('./contact.html')
                    res.end(contact)
                    break;

                 case '/perfil.jpg':
                    res.writeHead(200, { 'Content-Type': 'image/jpg' });
                    const img = fs.readFileSync('./tomas.jpg')
                    res.end(img)
                    break 
                    
                case '/style.css':
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