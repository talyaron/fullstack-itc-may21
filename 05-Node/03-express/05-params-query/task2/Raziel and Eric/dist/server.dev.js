"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 7000;
app.use(express["static"]('public'));
var newJokes = [];
app.get('/', function (req, res) {
  console.log(req.query);
  res.send({
    ok: true
  });
});
app.get('/getJokes', function (req, res) {
  res.send({
    jokesGet: jokesGet
  });
  console.log(newJokes);
});
app.put('/setJokes', function (req, res) {
  res.send();
  console.log(newJokes);
  res.send({
    send: "OK"
  });
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});