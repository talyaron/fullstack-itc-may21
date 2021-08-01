"use strict";

var express = require('express');

var app = express();
var port = process.env.port || 3000; //dataBase 

var students = []; // function outer() {
//     const students = [];
//     function inner(student) {
//         if(student === "l"){
//             const allStudents = students.map(stu)
//             return allStudents
//         }
//         if(student !== "l"){
//         students.push(student);
//         // students.forEach(student => {
//         //     console.log(student)
//         // });
//         }
//     }
//     return inner
// }
// const addStudent = outer();

app.use(express.json());
app.use(express["static"]('public'));
app.put('/newStudent', function (req, res) {
  var student = req.body.newStudent; // addStudent(student)

  students.push(student);
  res.send({
    student: student,
    send: "OK"
  });
});
app.get('/', function (req, res) {
  var studentId = req.query.id.studentId;
  var searchedStudent = students.filter(function (student) {
    return student.id === studentId;
  });
  res.send({
    searchedStudent: searchedStudent
  });
});
app.get('/:id', function (req, res) {
  var id = req.params.id;
  var searchedStudent = students.filter(function (student) {
    return student.id === id;
  });
  res.send({
    searchedStudent: searchedStudent
  });
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});