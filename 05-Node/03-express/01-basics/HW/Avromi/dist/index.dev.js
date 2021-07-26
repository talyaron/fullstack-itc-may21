"use strict";

var express = require('express');

var app = express();
var port = 3000;
var students = [];
app.use(express.json());
app.get('/', function (req, res) {
  res.send(students);
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
app.post('/getStudent', function (req, res) {
  var body = req.body;
  students.push(body);
  res.send({
    ok: true,
    students: students
  });
}); // app.put('/editStudent', (req, res) => {
//     console.log(req.query);
//     let searchedStudents = students.filter(student=>student.name === req.query.name);
//     searchedStudents.name=student.name
//     res.send({ok:true, students:searchedStudents})
// })
// app.delete('/delStudent', (req, res)=>{
//     console.log(req.query);
//     let searchedStudents = students.filter(student=>student.name !== req.query.name);
//     res.send({ok:true, students:searchedStudents})
// })

app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});