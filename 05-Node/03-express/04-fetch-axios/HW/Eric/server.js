const express = require('express');
app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static('public'));

let students = []






app.listen(port, ()=>{console.log(`Server listen on port ${port}`)})