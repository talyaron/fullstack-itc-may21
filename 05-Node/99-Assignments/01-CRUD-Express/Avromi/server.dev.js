"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var fs = require('fs'); //YS: This is not being used.


var taskRouter = require('./routes/tasksRoute.js');

app.use(express.json());
app.use(express["static"]('public'));
app.use('/tasks', taskRouter);
app.listen(port, function () {
  console.log("App Listening on port: ".concat(port));
});