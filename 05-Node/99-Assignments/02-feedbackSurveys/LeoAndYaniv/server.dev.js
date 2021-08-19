"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express["static"]('public')); //I use this to read a cookie (I can create it with out this)

app.use(cookieParser()); //Route (I import the routes of users and surveys)

var userRoute = require('./routes/routeUsers');

var surveysRoute = require('./routes/routeSurveys'); //Use of that Routes that I imported


app.use('/user', userRoute);
app.use('/surveys', surveysRoute);
app.listen(port, function () {
  console.log("Listening on port: ".concat(port));
});