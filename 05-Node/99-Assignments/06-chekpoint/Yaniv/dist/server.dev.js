"use strict";

var cookieParser = require('cookie-parser');

var path = require('path');

var pathToFile = path.resolve(__dirname, './public');

var express = require('express');

var app = express();
var port = process.env.PORT || 555;
app.use(express.json());
app.use(express["static"](pathToFile));
app.use(cookieParser());

var booksRoutes = require('./routes/dist/booksRoutes');

app.use('/book', booksRoutes);
app.listen(port, function () {
  console.log("Listening on port: ".concat(port));
});