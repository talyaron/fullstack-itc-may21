"use strict";

var _require = require('crypto'),
    randomUUID = _require.randomUUID;

var express = require('express');

var app = express();
var port = 3000;

var fs = require('fs');

var _require2 = require('uuid'),
    uuidv4 = _require2.v4;

function read() {
  var file = fs.readFileSync('./students.json');
  return JSON.parse(file);
}

app.use(express.json());
app.get('/', function (req, res) {
  var readData = read();
  res.send(readData);
});
app.get('/getStudents', function (req, res) {
  res.send({
    students: students
  });
}); //get by name

app.get('/getStudent', function (req, res) {
  var readData = read();
  var searchedStudents = readData.filter(function (student) {
    return student.name === req.query.name;
  });
  res.send({
    ok: true,
    students: searchedStudents
  });
});
app.post('/addStudent', function (req, res) {
  var readData = read();
  var name = req.body.name;
  var student = {
    name: name,
    id: uuidv4()
  };
  readData.push(student);

  try {
    fs.writeFileSync('./students.json', JSON.stringify(readData));
    res.status(200).send({
      ok: true,
      readData: readData
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
app.put('/editStudent', function (req, res) {
  var readData = read();
  var _req$body = req.body,
      id = _req$body.id,
      newName = _req$body.newName;
  var studentToEdit = readData.find(function (student) {
    return student.id === id;
  });
  studentToEdit.name = newName;

  try {
    fs.writeFileSync('./students.json', JSON.stringify(readData));
    res.status(200).send(studentToEdit);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
app["delete"]('/delStudent', function (req, res) {
  var readData = read();
  var studentId = req.query.id;
  var newStudentData = readData.filter(function (student) {
    return student.id !== studentId;
  });

  try {
    fs.writeFileSync('./students.json', JSON.stringify(newStudentData));
    res.status(200).send(newStudentData, 'student has been deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});