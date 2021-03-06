"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 5000;
app.use(express.json());
app.use(express["static"]('public'));

var userRoute = require('./routes/userRoute');

app.use('/user', userRoute);
app.listen(port, function () {
  console.log("Listening on port ".concat(port, "..."));
});