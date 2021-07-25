const http = require("http");
const port = process.env.PORT || 3000;
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  const { method, url, header } = req;

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      const homeFile = fs.readFileSync("./index.html");
      res.end(homeFile);
      break;
    case "/image-profile":
      res.writeHead(200, { "Content-Type": "image/jpg" });
      const profileImage = fs.readFileSync("./profile.jpg");
      res.end(profileImage);
      break;
    case "/style":
      res.writeHead(200, { "Content-Type": "text/css" });
      const style = fs.readFileSync("./styles.css");
      res.end(style);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });

      res.end("Page doesnt Found");
  }
});
server.listen(port, () => {
  console.log("Server listen on port", port);
});
