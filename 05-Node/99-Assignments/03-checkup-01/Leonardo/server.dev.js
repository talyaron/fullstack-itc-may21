"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public')); //route

var studentRoute = require('./routes/routeStudent');

app.use('/students', studentRoute);
app.listen(port, function () {
  return console.log('Server listen on port', port);
});