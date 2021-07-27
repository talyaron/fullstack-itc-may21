"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
var students = [];
app.get('/', function (req, res) {
  res.send('hello world');
});
app.get('/getStudents', function (req, res) {
  res.setDefaultEncoding({
    students: students
  });
});
app.post('/addStudent', function (req, res) {
  var body = req.body;
  students.push(body);
  res.send({
    ok: true,
    students: students
  });
});
app.get('/findStudent', function (req, res) {
  var findStudent = students.filter(function (student) {
    return student.name == req.query.name;
  });
  res.send({
    ok: true,
    students: findStudent
  });
});
app.get('/delStudent', function (req, res) {
  var student2 = students.filter(function (student) {
    return student.name !== req.query.name;
  });
  console.log(student2);
  res.send({
    ok: true,
    students: student2
  });
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});