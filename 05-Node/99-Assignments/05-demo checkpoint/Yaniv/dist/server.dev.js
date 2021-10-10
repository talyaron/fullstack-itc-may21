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

var userRoutes = require('./routes/dist/userRoutes');

app.use('/user', userRoutes);
app.listen(port, function () {
  console.log("Listening on port: ".concat(port));
});