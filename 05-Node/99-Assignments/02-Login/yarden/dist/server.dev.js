"use strict";

/* This is a simple login 2 + page site exercise
This is the back-end file
*/
var express = require('express');

var cookieParser = require('cookie-parser');

var port = process.env.PORT || 3000;
var app = express();
app.use(express.json());
app.use(express["static"]('public'));
app.use(cookieParser());
app.post('/api/uddUser', function (res, req) {}); // Listen on port:

app.listen(port, function () {
  console.log("Server listening on port ".concat(port, "..."));
});