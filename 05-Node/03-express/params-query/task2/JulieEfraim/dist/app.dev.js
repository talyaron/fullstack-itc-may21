"use strict";

var express = require('express');

app = express();
var port = process.env.PORT || 4000;
app.use(express.json());
app.use(express["static"]('public'));
var jokesArray = [];
app.post('/addJoke', function (req, res) {
  jokesArray.push(req.body);
  console.log(jokesArray);
});
app.get('/getJoke', function (req, res) {
  res.send({
    jokesArray: jokesArray
  });
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});