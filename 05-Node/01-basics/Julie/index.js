const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const server = http.createServer();

server.on("request", (req, res) => {
  try {
    const { method, url, headers } = req;

    switch (url) {
      case "/":
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        const homeFile = fs.readFileSync("./index.html");
        res.end(homeFile);
        break;
      case "/profile.img":
        res.writeHead(200, {
          "Content-Type": "image/jpg",
        });
        const imageFile = fs.readFileSync(`./Headshot.jpg`);
        res.end(imageFile);
        break;
      case "/css":
        res.writeHead(200, {
          "Content-Type": "text/css",
        });
        const cssFile = fs.readFileSync(`./index.css`);
        res.end(cssFile);
        break;
      default:
        throw new Error("boooooooooooom");
    }
  } catch (e) {
    console.log(e);

    res.writeHead(500, {
      "Content-Type": "text/plain",
    });

    res.end(`There is a sever error: ${e.message}`);
  }
});
server.listen(PORT, (error) => {
  console.log(`Server listening on port ${PORT}`);
});
