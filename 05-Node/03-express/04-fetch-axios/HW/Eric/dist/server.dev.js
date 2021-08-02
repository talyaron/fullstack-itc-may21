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
});
app.get("/getStudents", function (req, res) {
  var id = req.query.id; //YS: Why dont you destructure here like in the params? 

  var studentById = allStudents.find(function (element) {
    return element.id === id;
  });
  res.send(studentById);
  req.send(studentById); //YS: Why are you sending twice? 
});
app.get("/getStudents/:id", function (req, res) {
  var id = req.params.id;
  var studentByIdParams = allStudents.find(function (elements) {
    return elements.id === id;
  });
  res.send(studentByIdParams);
  req.send(studentByIdParams); //YS: Why are you sending twice? 

  console.log(); //YS: ? 
});
app.listen(port, function () {
  console.log("Server listen on port ".concat(port));
});