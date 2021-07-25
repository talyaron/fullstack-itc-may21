/*create a server
create an HTML file with your CV (resume).
Make it stylish and beautiful, as you deserve! 
serve the file using the server.
top-notch: add your image to the index.html
*/

//Setting up a public directory and serving it to the user on designated port using Express

const express = require('express');
const app = express();
const port = 2020;

app.use(express.static('./'));

const server = app.listen(port, () => console.log(`listening on port ${port}!`));

server.on('connection', () => {
  console.log('New connection...'); //Just not sure why log is occuring twice
})