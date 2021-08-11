"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var cookieParser = require('cookie-parser');

var path = require('path');

var usersJsonPath = path.resolve(__dirname, './models/users.json');
console.log(usersJsonPath);
app.use(express.json());
app.use(express["static"]('public')); //I use this to read the cookie (I can create it with out this)

app.use(cookieParser()); //Route

var registerRoute = require('./routes/routeUsers');

var surveysRoute = require('./routes/routeSurveys');

app.use('/register', registerRoute);
app.use('/surveys', surveysRoute);
app.listen(port, function () {
  console.log("Listening on port: ".concat(port));
});