"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 8080;

var cookieParser = require('cookie-parser');

var fs = require("fs");

var surveyRouter = require('./routes/surveyRoute.js');

var userRouter = require('./routes/userRoutes.js');

app.use(express["static"]("public"));
app.use(cookieParser());
app.use(express.json());
app.use('/survey', surveyRouter);
app.use('/question', surveyRouter);
app.use('/users', userRouter);
app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
}); //alert user slready exist