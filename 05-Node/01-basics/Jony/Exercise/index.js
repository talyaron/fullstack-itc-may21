const path = require('path')
const express = require('express')
const app = express()
const http = require('http');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')))

/*const requestListener = app.get('/', function (req, res) {

    res.writeHead(200);
    
    const file = fs.readFileSync('./index.html');
    res.end(file);
    
})

const server = http.createServer(requestListener);
server.listen(3000, () => { console.log('Listen on port 3000') });*/

app.get('/', function(req, res){

    res.sendFile(__dirname + "/index.html");
    
});

console.log('D')
app.listen(3000, () => { console.log('Listen on port 3000') });