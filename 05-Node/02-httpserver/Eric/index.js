const http = require('http');
const port = process.env.PORT || 3001;


const server = http.createServer((req,res)=>{
    switch(req.url){
        case '/':
//add read file
    
    res.end(`
        <html>
            <head>
                <title>first node app</title>
            </head>
                <body>
                <h1>Welcometo my node app</h1>
                <a href="/admin">Admin</a>
                <a href="">Contact</a>
                <a href="">About</a>
                </body>
        </html>
        `);
        break;
        case '/admin':
            res.end('welcome to the admin page');
        break;
        case '/contact':
            res.end('welcome to contact page');
        break;
        default:
            res.end(`
        <html>
            <head>
                <title>first node app</title>
            </head>
                <body>
                <h1>Welcometo my node app</h1>
                </body>
        </html>
        `);    
    }
})


server.listen(port, () => {
    console.log(`server now is on port ${port}`)
})