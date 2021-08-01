"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public'));
app.use(express.json());
var students = [{
  name: 'Dan',
  id: '458765384'
}, {
  name: 'Tom',
  id: '5468568'
}];
app.get('/getStudents', function (req, res) {
  res.send({
    students: students
  });
});
app.post('/addStudent', function (req, res) {
  console.log(req.body);
  var _req$body = req.body,
      name = _req$body.name,
      id = _req$body.id;
  students.push({
    name: name,
    id: id
  });
  res.send({
    message: 'one person was added',
    students: students
  });
});
app["delete"]('/deleteStudent', function (req, res) {
  var id = req.body.id;
  setTimeout(function () {
    students = students.filter(function (student) {
      return student.id !== id;
    });
    res.send({
      message: 'one student record was deleted',
      students: students
    });
  }, 2000);
});
app.put('/updateStudent', function (req, res) {
  var _req$body2 = req.body,
      id = _req$body2.id,
      name = _req$body2.name;
  var studentIndex = students.findIndex(function (student) {
    return student.id === id;
  });

  if (studentIndex > -1) {
    students[studentIndex].name = name;
    res.send({
      message: 'one student was updated',
      students: students
    });
  } else {
    res.send({
      message: 'couldnt find the student',
      students: students
    });
  }
});
app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
});