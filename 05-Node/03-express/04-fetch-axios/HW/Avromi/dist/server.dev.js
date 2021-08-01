"use strict";

var express = require('express');

var app = express();
var port = process.env.port || 3000; //dataBase 
// const students = [];

function outer() {
  var students = [];

  function inner(student) {
    if (student === "l") {
      return students;
    }

    students.push(student); // students.forEach(student => {
    //     console.log(student)
    // });

    return students;
  }

  return inner;
}

var students = outer();
app.use(express.json());
app.use(express["static"]('public'));
app.put('/newStudent', function (req, res) {
  var student = req.body.newStudent;
  students(student); // students.push(student)

  res.send({
    student: student,
    send: "OK"
  });
});
app.get('/', function (req, res) {
  var studentId = req.query.id.studentId;
  var searchedStudent = students("l").filter(function (student) {
    return student.id === studentId;
  });
  res.send({
    searchedStudent: searchedStudent
  });
});
app.get('/:id', function (req, res) {
  var id = req.params.id;
  var searchedStudent = students("l").filter(function (student) {
    return student.id === id;
  });
  res.send({
    searchedStudent: searchedStudent
  });
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});