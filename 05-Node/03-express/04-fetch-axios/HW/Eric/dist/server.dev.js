"use strict";

var express = require('express');

app = express();
var port = process.env.PORT || 5000;
app.use(express.json());
app.use(express["static"]('public'));
var students = [];
app.post('/addStudent', function (req, res) {
  students.push(req.body);
  console.log(students);
});
app.get('/getStudent', function (req, res) {
  res.send({
    students: students
  });
});
app.listen(port, function () {
  console.log("Server listen on port ".concat(port));
});