"use strict";

var express = require('express');

app = express();
var port = process.env.PORT || 4000;
app.use(express.json());
app.use(express["static"]('public'));
app.post('/add', function (req, res) {
  console.log(req.body);
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});