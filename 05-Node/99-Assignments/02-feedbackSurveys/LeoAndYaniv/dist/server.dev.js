"use strict";

var express = require('express');

app = express();
var port = process.env.PORT || 3000;

var cookieParser = require('cookie-parser');

app.use(express["static"]('public')); //I use this to read the cookie (I can create it with out this)

app.use(cookieParser()); //Route

var registerRoute = require('./routes/routeUsers');

app.use('/routeUsers', registerRoute);
app.listen(port, function () {
  console.log("Listening on port: ".concat(port));
});