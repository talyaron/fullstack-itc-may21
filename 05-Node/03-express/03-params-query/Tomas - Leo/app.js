/* create a server and a client
in the client: 
 - create an input of colors, and "on change" change the color of the background of the document
 - send to the server the color
the server will store the color in global (better on closure) "color" variable

when the client loads, it will fetch the color from the server and  paint the background in that color */

const express = require('express');
app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const html = fs.readFileSync('index.html');
    console.log(pepe);
    res.send(html);
});

app.post('/seeColor', (req, res) => {
    let body = req.body;
    console.log(body);
    res.send(body);
});


app.listen(port, () => { console.log('Server listen on port', port) })