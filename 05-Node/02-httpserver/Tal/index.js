const http = require('http');
const port = process.env.PORT || 3001;
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    try {

        const {
            method,
            url,
            headers, 
            body
        } = req;

        console.log(method)
        console.log('url:', url);
        console.log(body);

        if (method === 'GET') {
            switch (url) {
                case '/':
                    res.writeHead(200, { 'Content-Type': 'text/plain' });

                    res.end('Home Page');
                
                case '/about':
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    const file = fs.readFileSync('about.html');
                    res.end(file);
                case '/sdfgsdgdfhdfhftutyutyuty':
                    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                    const flower = fs.readFileSync('flower.jpeg');
                    res.end(flower)
                default:
                    res.writeHead(404, { 'Content-Type': 'text/plain' });

                    res.end('The requested resource was not found');
            }
        } else if (method === 'POST') {
           
            req.on('data',(data)=>{
                console.log('data;',data)
            })

            res.end('this was a post');
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' })
            res.end('Bad request')
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