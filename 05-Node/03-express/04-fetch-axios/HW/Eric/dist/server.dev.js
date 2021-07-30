"use strict";

var express = require('express');

app = express();
var port = process.env.PORT || 5000;

var fs = require('fs');

app.use(express.json());
app.use(express["static"]('public'));

var readAllUsers = function readAllUsers() {
  var allUsers = fs.readFileSync('./students.json'); //async     

  return JSON.parse(allUsers); //original form
};

app.post('/aa', function (req, res) {
  var _req$body = req.body,
      id = _req$body.id,
      name = _req$body.name,
      age = _req$body.age,
      avgGrade = _req$body.avgGrade;
  var newStudent = {
    id: id,
    name: name,
    age: age,
    avgGrade: avgGrade
  };
  var allUsers = readAllUsers();
  allUsers.push(newStudent);
  fs.writeFileSync('./students.json', JSON.stringify(allUsers));
  res.send(allUsers);
});
app.get('/aa', function (req, res) {
  var allUsers = readAllUsers();
  res.send(allUsers);
});
app.listen(port, function () {
  console.log("Server listen on port ".concat(port));
});