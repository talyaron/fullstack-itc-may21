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
  res.send(students); //YS: Where is this variable coming from? 
});
app.get('/getStudents', function (req, res) {
  res.send({
    students: students
  }); //YS: Where is this variable coming from? 
}); //get by name

app.get('/getStudent', function (req, res) {
  console.log(req.query); //YS: You should be doing this by id and setting the route to:  /getStudent/:id

  var searchedStudents = students.filter(function (student) {
    return student.name === req.query.name;
  }); //YS: Use find instead of filter. 

  res.send({
    ok: true,
    students: searchedStudents
  });
});
app.post('/getStudent', function (req, res) {
  //YS: This route should be /addStudent
  var readData = read();
  console.log(readData);
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
  //YS: This route should be /editStudent/:id  (I know that we did this together, but its better if you start using it this way)
  var readData = read();
  console.log(readData);
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
}); // YS: Why wasnt this implemented? 
// app.delete('/delStudent', (req, res)=>{
//     console.log(req.query);
//     let searchedStudents = students.filter(student=>student.name !== req.query.name);
//     res.send({ok:true, students:searchedStudents})
// })

app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});