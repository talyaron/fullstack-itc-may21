"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 5000;
var students = []; // READ JSON

app.use(express.json()); // READ PUBLIC 

app.use(express["static"]('public')); // GET CSS

app.get('/style.css', function (req, res) {
  var css = fs.readFileSync('style.css');
  res.send(css);
}); // GET STUDENTS

app.get('/getAllStudent', function (req, res) {
  res.send(students);
}); // POST STUDIENT WITH QUERY

app.post('/postStudents', function (req, res) {
  var student = req.body;
  console.log(students);
  students.push({
    student: student
  });
  res.send(student);
}); // GET SEARCHED STUDIENT WITH PARAMS ID

app.get('/searchParam/:id', function (req, res) {
  var id = req.params.id;
  var searchedStudent = students.find(function (stud) {
    return stud.id === id;
  });
  console.log(students);
  res.send(searchedStudent);
  console.log(searchedStudent);
});
app.get('/searchQuery', function (req, res) {
  var id = req.query.id;
  var searchedStudent = students.filter(function (stud) {
    return stud.id === id;
  });
  console.log(students);
  res.send(searchedStudent);
  console.log(searchedStudent);
});
app.listen(port, function () {
  console.log('Server listen on port', port);
}); // create server-client app
// in the server create an array of students (preferbly with a clouser)
// in the client, the user can add a student information ({name, age, id, aconstage_grade})
// the client send the added student information to the server. the server store the information on the array.
// the user will enter the student id. in the client use 2 route requests. the user will get the information with on of two buttons.. one button will get the information with "params" and the second with "query".
// the results will be showen on the DOM
// FORMULARIO => NAME, AGE, ID, AVERAGE_GRADE
// AXIOS => GET, POST
// RUTAS: INDEX, GETSTUDENTS (PARAMS), POSTSTUDENTS (QUERY)
// EVENTLISTENERS FUNCTIONS IN BOTTOMS TO SHOW IN THE DOM