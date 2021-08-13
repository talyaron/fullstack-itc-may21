"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var cookieParser = require('cookie-parser');

var _require = require('./middlewares/readUserCookie'),
    readUserCookie = _require.readUserCookie; // const isAdmin = require('./middlewares/isAdmin');


app.use(express.json());
app.use(express["static"]('public')); // app.use(isAdmin());
//I use this to read the cookie (I can create it with out this)

app.use(cookieParser()); //Route

var userRoute = require('./routes/routeUsers');

var surveysRoute = require('./routes/routeSurveys');

app.use('/user', readUserCookie, userRoute);
app.use('/surveys', surveysRoute);
app.listen(port, function () {
  console.log("Listening on port: ".concat(port));
});