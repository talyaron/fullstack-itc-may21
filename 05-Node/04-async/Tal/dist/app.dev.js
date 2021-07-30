"use strict";

var express = require('express');

app = express();
var port = process.env.PORT || 3000;
var students = [{
  name: 'moshe',
  grade: 97
}];
app.use(express.json());
app.use(express["static"]('public'));
app.get('/getData', function (req, res) {
  setTimeout(function () {
    res.send(students);
  }, 2500);
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});