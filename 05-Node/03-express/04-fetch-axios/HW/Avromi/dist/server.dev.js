"use strict";

var express = require('express');

var app = express();
var port = process.env.port || 3000; //dataBase 

function outer() {
  var students = [];

  function inner(student) {
    students.push(student);
    students.forEach(function (student) {
      console.log(student);
    });
  }

  return inner;
}

var addStudent = outer();
app.use(express.json());
app.use(express["static"]('public'));
app.put('/newStudent', function (req, res) {
  var student = req.body.newStudent;
  addStudent(student);
  res.send({
    student: student,
    send: "OK"
  });
});
app.get('/', function (req, res) {
  var studentId = req.query.id.studentId;
  res.send();
});
app.get('/:id', function (req, res) {
  var id = req.params.id;
  res.send(id);
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});