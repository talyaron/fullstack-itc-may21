"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

function outFunction() {
  var students = [];

  function inFunction(student) {
    students.push(student);
    students.forEach(function (student) {
      console.log(student);
    });
  }

  return inFunction;
}

var addStudent = outFunction();
app.use(express.json());
app.use(express["static"]('public'));
app.put('/newStudent', function (req, res) {
  var student = req.body.student;
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
  console.log("The server is running at port:".concat(port));
});