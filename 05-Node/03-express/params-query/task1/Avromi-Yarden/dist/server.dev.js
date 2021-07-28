"use strict";

var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express["static"]('public'));
app.post('./getColor', function (req, res) {
  var color = req.data.color;
  console.log(color);
  res.send('something');
});
app.listen(PORT, function () {
  console.log("Example app listening at http://localhost:".concat(PORT));
});