const http = require('http');
const fs = require('fs')
const port = process.env.PORT || 3008;


const server = http.createServer();


server.on('request', (req, res)=>{

    const {method, url, headers, body} = req;

    switch(url){
        case '/main':

        res.writeHead(200, {'Content-Type': 'text/html'})
        const main = fs.readFileSync('./index.html');
        res.end(main)
        break;

        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            const about = fs.readFileSync('./about.html')
            res.end(about)
            break;

        case '/contact':
            res.readFileSync(200,{'Content-Type' : 'text/html'})
            const contact  = fs.readFileSync('./contact.html')
            res.end(contact)
            break;
        
            default:
                res.writeHead(404, {'Content-Type': 'text/plain'})
                res.end('There is a sever error')

    }
})     

server.listen(port,()=> {
    console.log('server listen on port', port)
})
