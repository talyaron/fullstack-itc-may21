"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 8080;

var cookieParser = require('cookie-parser');

var fs = require("fs"); //do  the same to answers and surveys .json?


var surveyRouter = require('./routes/surveyRoute.js');

var userRouter = require('./routes/userRoutes.js');

var _require = require('uuid'),
    uuidv4 = _require.v4; // do  the same to questions?


app.use(express["static"]("public"));
app.use(cookieParser());
app.use(express.json());
app.use('/survey', surveyRouter); //do the same for questionRouter?

app.use('/users', userRouter); // const addUserRouter = require('./routes/tasksRoute.js')
// app.use('/users', userRouter)

app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
});