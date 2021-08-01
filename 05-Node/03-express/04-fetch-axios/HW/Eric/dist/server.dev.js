"use strict";

var express = require('express');

app = express();
var port = process.env.PORT || 5000;

var fs = require('fs');

var _require = require('uuid'),
    uuidv4 = _require.v4;

app.use(express.json());
app.use(express["static"]('public'));

var readallStudents = function readallStudents() {
  var allStudents = fs.readFileSync('./students.json');
  return JSON.parse(allStudents);
};

app.post('/aa', function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      age = _req$body.age,
      avgGrade = _req$body.avgGrade;
  var newStudent = {
    name: name,
    age: age,
    avgGrade: avgGrade
  };
  var allStudents = readallStudents();
  allStudents.push(newStudent);
  fs.writeFileSync('./students.json', JSON.stringify(allStudents));
  res.send(allStudents);
});
app.get('/aa', function (req, res) {
  var allStudents = readallStudents();
  res.send(allStudents);
});
app.get("aa/".concat(id), function (req, res) {
  var student = {
    id: uuidv4()
  };
  res.send(students.id);
});
app.get("aa?id=".concat(id), function (req, res) {
  var student = {
    id: uuidv4()
  };
  res.send(students.id);
});
app.listen(port, function () {
  console.log("Server listen on port ".concat(port));
});