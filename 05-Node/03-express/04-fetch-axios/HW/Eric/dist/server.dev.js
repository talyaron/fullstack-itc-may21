"use strict";

var express = require('express');

app = express();
var port = process.env.PORT || 5000;

var fs = require('fs');

var _require = require('uuid'),
    uuidv4 = _require.v4;

app.use(express.json());
app.use(express["static"]('public'));

var readAllStudents = function readAllStudents() {
  var allStudents = fs.readFileSync('./students.json');
  return JSON.parse(allStudents);
};

var allStudents = readAllStudents();
app.post('/postStudents', function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      age = _req$body.age,
      avgGrade = _req$body.avgGrade;
  var newStudent = {
    name: name,
    age: age,
    avgGrade: avgGrade,
    id: uuidv4()
  };
  allStudents.push(newStudent);
  fs.writeFileSync('./students.json', JSON.stringify(allStudents));
  res.send(allStudents);
});
app.get('/getAllStudents', function (req, res) {
  res.send(allStudents);
}); // app.get(`getStudents/${id}`, (req, res) => {
//     const student = {id: uuidv4()}
//     res.send(students.id)
// })

app.get("/getStudents", function (req, res) {
  var id = req.query.id;
  var studentById = allStudents.find(function (element) {
    return element.id === id;
  });
  res.send(studentById);
  console.log(studentById);
  req.send(studentById);
});
app.listen(port, function () {
  console.log("Server listen on port ".concat(port));
});