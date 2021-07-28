"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 7000;
app.use(express["static"]('public'));
app.get('/', function (req, res) {
  console.log(req.query);
  res.send({
    ok: true
  });
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});