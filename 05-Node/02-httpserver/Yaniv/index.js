const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3002;


const server = http.createServer();

server.on('request', (req, res) => {
    try {

        const {
            method,
            url,
            headers
        } = req;

        switch (url) {
            case '/home':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const homeHtml = fs.readFileSync('./home.html');
                res.end(homeHtml);            
            break;

            case '/about':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const aboutHtml = fs.readFileSync('./about.html');
                res.end(aboutHtml);            
            break;

            case '/gallery':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const galleryHtml = fs.readFileSync('./gallery.html');
                res.end(galleryHtml);            
            break;

            case '/style.css':
                res.writeHead(200, { 'Content-Type': 'text/css' });
                const styleCss = fs.readFileSync('./dist/style.css');
                res.end(styleCss);            
            break;

            case '/dog.jpg':
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                const dogImg = fs.readFileSync('./dog.jpg');
                res.end(dogImg);            
            break;

            default:
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 error - page not found :-[ </h1>');
            break;
        }
    } catch (er) {
        console.log(e);

        res.writeHead(500, { 'Content-Type': 'text/plain' });

        res.end(`There is a sever error: ${e.message}`);
    }

})

server.listen(port, () => {
    console.log('Server listen on port', port)
})