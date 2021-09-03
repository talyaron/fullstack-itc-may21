"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var cookieParser = require('cookie-parser');

var path = require("path");

var pathToPublicFolder = path.resolve(__dirname, "./public");
app.use(express.json());
app.use(express["static"](pathToPublicFolder));
app.use(cookieParser());

var bookRoute = require('./routes/booksRoute'); //Use of that Routes that I imported


app.use('/books', bookRoute);
app.listen(port, function () {
  console.log("Listening on port: ".concat(port));
});