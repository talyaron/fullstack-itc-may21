var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/html')))
app.use(express.json());
app.listen(port, function () { return console.log('app Listening on port', port); });
