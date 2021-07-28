"use strict";

var express = require('express');

app = express();
var port = process.env.PORT || 4000;
app.use(express["static"]('public'));
app.get('/addColor', function (req, res) {
  console.log(req.body);
  res.send("students.list");
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});