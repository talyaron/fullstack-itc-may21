const http = require('http');
const fs = require('fs');
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
            case '/cv':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                const cvHtml = fs.readFileSync('./public/cv.html');
                res.end(cvHtml);            
            break;

            case '/style.css':
                res.writeHead(200, { 'Content-Type': 'text/css' });
                const styleCss = fs.readFileSync('./public/dist/cv.css');
                res.end(styleCss);            
            break;

            case '/yaniv.jpg':
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                const profImg = fs.readFileSync('./public/images/yaniv.jpeg');
                res.end(profImg);            
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