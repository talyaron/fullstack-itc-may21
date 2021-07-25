const http = require('http');
const fs = require('fs')
const port = process.env.PORT || 3008;


const server = http.createServer();


server.on('request', (req, res)=>{

    const {method, url, headers} = req;

    switch(url){
        case "/":

        res.writeHead(200, {'Content-Type': "text/html"})
        const mainN = fs.readFileSync('./index.html');
        res.end(mainN)
        break;

        case '/about':
            res.writeHead(200, {'Content-Type': "text/html"});
            const aboutT = fs.readFileSync('./about.html')
            res.end(aboutT)
            break;

        case '/contact':
            res.readFileSync(200,{'Content-Type' : "text/html"})
            const contactT  = fs.readFileSync('./contact.html')
            res.end(contactT)
            break;
        
            default:
                res.writeHead(404, {'Content-Type': "text/plain"})
                res.end('Page doesnt Found')

    }
})     

server.listen(port,()=> {
    console.log('server listen on port', port)
})
