/* create a server
create an HTML file with your CV (resume).
Make it stylish and beautiful, as you deserve!
serve the file using the server.

80 points

//top-notch:
add your image to the index.html

+20 points */

/////////////////////// THIS IS TO SET UP THE SERVER WITH NODE: /////////////////////////

//(Im pretty sure that it should be a better way to show all the images without doing that many cases)
const http = require('http');
const port = process.env.PORT || 3000;
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  try {
    const {
      method,
      url,
      headers
    } = req;

    switch (url) {

      case '/':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const home = fs.readFileSync('./public/index.html')
        res.end(home);
        break;

      case '/styles':
        res.writeHead(200, { 'Content-Type': 'text/css' });
        const style = fs.readFileSync('./public/dist/styles.min.css');
        res.end(style);
        break;

      case '/argentina':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picArg = fs.readFileSync('./public/img/argentina.png')
        res.end(picArg);
        break;

      case '/budget':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picBudget = fs.readFileSync('./public/img/budget.png')
        res.end(picBudget);
        break;

      case '/coding':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picCoding = fs.readFileSync('./public/img/coding.png')
        res.end(picCoding);
        break;

      case '/css-3':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picCss = fs.readFileSync('./public/img/css-3.png')
        res.end(picCss);
        break;

      case '/cv':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picCv = fs.readFileSync('./public/img/cv.png')
        res.end(picCv);
        break;

      case '/github':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picGit = fs.readFileSync('./public/img/github.png')
        res.end(picGit);
        break;

      case '/html':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picHtml = fs.readFileSync('./public/img/html.png')
        res.end(picHtml);
        break;

      case '/javascript':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picJs = fs.readFileSync('./public/img/javascript.png')
        res.end(picJs);
        break;

      case '/manager':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picManager = fs.readFileSync('./public/img/manager.png')
        res.end(picManager);
        break;

      case '/nodejs':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picNode = fs.readFileSync('./public/img/nodejs.png')
        res.end(picNode);
        break;

      case '/profile':
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        const picProfile = fs.readFileSync('./public/img/profile.jpg')
        res.end(picProfile);
        break;

      case '/spanish':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picSpanish = fs.readFileSync('./public/img/spanish-flag.png')
        res.end(picSpanish);
        break;

      case '/united-kingdom':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picUk = fs.readFileSync('./public/img/united-kingdom (1).png')
        res.end(picUk);
        break;

      case '/united-kingdom1':
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const picUk1 = fs.readFileSync('./public/img/united-kingdom.png')
        res.end(picUk1);
        break;

      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('The request resource was not found')
    }

  } catch (e) {
    console.log(e);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`There is a sever error: ${e.message}`);
  }
})

server.listen(port, () => {
  console.log(`The port is serving in port ${port}`)
})

/////////////////////// THIS IS TO SET UP THE SERVER WITH EXPRESS: /////////////////////////
/* const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const server = app.listen(3000, () => {
  console.log('Servidor web iniciado en puerto 3000');
});
 */