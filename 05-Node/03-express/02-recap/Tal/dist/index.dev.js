"use strict";

//express
//post (with data), get (with data)
var students = [];

var express = require('express');

var app = express();
var port = 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/getStudents', function (req, res) {
  res.send({
    students: students
  });
}); //get by name

app.get('/getStudent', function (req, res) {
  console.log(req.query);
  var searchedStudents = students.filter(function (student) {
    return student.name === req.query.name;
  });
  res.send({
    ok: true,
    students: searchedStudents
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
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});