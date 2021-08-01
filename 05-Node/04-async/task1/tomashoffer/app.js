const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// READ JSON
app.use(express.json());
// READ PUBLIC 
app.use(express.static('public'));

app.listen(port, ()=>{console.log('Server listen on port', port)})