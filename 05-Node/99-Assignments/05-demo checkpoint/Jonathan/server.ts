const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'public/html')))

app.use(express.json());

app.listen(port, ()=> console.log('app Listening on port', port))