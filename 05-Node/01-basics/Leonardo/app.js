/* create a server
create an HTML file with your CV (resume).
Make it stylish and beautiful, as you deserve!
serve the file using the server.

80 points

//top-notch:
add your image to the index.html

+20 points */

/////////////////////// THIS IS TO SET UP THE SERVER WITH NODE: /////////////////////////

/* const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
    res.writeHead(200);
    //read the file from the computer, and send it to the client
    const file = fs.readFileSync('./index.html');
    res.end(file);
}

const server = http.createServer(requestListener);
server.listen(3000, () => { console.log('Listen on port 3000') });
 */

/////////////////////// THIS IS TO SET UP THE SERVER WITH EXPRESS: /////////////////////////
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const server = app.listen(3000, () => {
  console.log('Servidor web iniciado en puerto 3000');
});
