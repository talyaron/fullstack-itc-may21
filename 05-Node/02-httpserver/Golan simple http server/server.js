//Hey Yonatan! I also did it in HTTP :)
//Everything worked on my end, except the link to the about page for some reason

const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer();
const fs = require("fs");


server.on("request", (req, res) => {
    try {
        const {
            method,
            url,
            headers
        } = req;

        switch (url) {
            case "/":
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                const homePg = fs.readFileSync('./index.html');
                res.end(homePg)
                break;
            case "/about":
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                const aboutPg = fs.readFileSync('./about.html');
                res.end(aboutPg)
                break;
            case '/style.css':
                res.writeHead(200, {
                    'Content-Type': 'text/css'
                });
                const styleSheet = fs.readFileSync('./style.css');
                res.end(styleSheet);
                break;

            case '/profile.jfif':
                res.writeHead(200, {
                    'Content-Type': 'image/jpg'
                });
                const img = fs.readFileSync('./profile.jfif');
                res.end(img);
                break;
            default:
                res.writeHead(404, {
                    "Content-Type": "text/plain"
                });

                res.end("Oops! 404: Page not Found");
        }
    } catch (er) {
        console.log(er);

        res.writeHead(500, {
            "Content-Type": "text/plain"
        });

        res.end(`Oops - server error: ${e.message}`);
    }
});

server.listen(port, () => {
    console.log('Server listening on port', port, ':-)')
});