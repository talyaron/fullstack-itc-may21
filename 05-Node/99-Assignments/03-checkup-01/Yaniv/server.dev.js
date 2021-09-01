"use strict";

var cookieParser = require('cookie-parser');

var path = require('path');

var pathToFile = path.resolve(__dirname, './public');

var express = require('express');

var app = express();
var port = process.env.PORT || 555;
app.use(express.json());
app.use(express["static"](pathToFile));
app.use(cookieParser()); // const userRoutes = require('./routes/userRoutes');

var itemsRoute = require('./routes/itemsRoutes'); // app.use('/user', userRoutes);


app.use('/items', itemsRoute);
app.listen(port, function () {
  return console.log("App listening on port ".concat(port));
});