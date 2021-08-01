"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 8080; // READ JSON

app.use(express.json()); // READ PUBLIC 

app.use(express["static"]('public'));
app.listen(port, function () {
  console.log('Server listen on port', port);
});