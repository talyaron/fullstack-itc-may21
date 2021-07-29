"use strict";

var express = require('express');

var app = express();
var port = process.env.port || 3000; //dataBase 

function outer() {
  var studnets = [];

  function inner(student) {
    students.push(student);
    console.log(student);
  }

  return inner;
}

var addStudent = outer();
app.use(express.json());
app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});