"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public'));
app.get('/cookie', function (req, res) {
  //read cookies 
  var cookie = req.cookies;
  console.log(cookie);
  console.log('before cookie ');
  res.cookie('cookie', "Avromi Is...", {
    maxAge: 30000000,
    httpOnly: true
  });
  res.send({
    ok: true
  });
});
app.listen(port, function () {
  console.log("listening on port ".concat(port));
});