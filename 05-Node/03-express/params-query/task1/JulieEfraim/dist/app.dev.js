"use strict";

var express = require('express');

app = express();
var port = process.env.PORT || 4000;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express["static"]('public'));
app.post('/addColor', function (req, res) {
  console.log(req.body);
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});