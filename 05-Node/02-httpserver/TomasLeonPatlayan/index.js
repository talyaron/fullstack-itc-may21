const http = require("http");
const port = process.env.PORT || 3001;
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  try {
    const { method, url, headers } = req;

    switch (url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
      const homeFile = fs.readFileSync('./index.html');
      res.end(homeFile)
      break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/html" });
      const homeFile2 = fs.readFileSync('./about.html');
      res.end(homeFile2)
      break;
      case "/contact":
        res.writeHead(200, { "Content-Type": "text/html" });
      const homeFile3 = fs.readFileSync('./contact.html');
      res.end(homeFile3)
      break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });

        res.end("Page doesnt Found");
    }
  } catch (e) {
    console.log(e);

    res.writeHead(500, { "Content-Type": "text/plain" });

    res.end(`There is a sever error: ${e.message}`);
  }
});

server.listen(port, () => {
  console.log("Server listen on port", port);
});
