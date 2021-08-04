"use strict";

var express = require("express");

var app = express();
var port = process.env.port || 3000; //dataBase
// const students = [];

function outer() {
  var students = [];

  function inner(student) {
    if (student === "l") {
      return students;
    }

    students.push(student); // students.forEach(student => {
    //     console.log(student)
    // });

    return students;
  }

  return inner;
}

var students = outer();
app.use(express.json()); //YS: This should be at the top 

app.use(express["static"]("public")); //YS: This should be at the top 

app.put("/newStudent", function (req, res) {
  //YS: To add is POST, to edit is PUT
  var student = req.body.newStudent;
  students(student); // students.push(student)

  res.send({
    student: student,
    send: "OK" //YS: You dont have to send back the "ok" part, just the student is fine

  });
});
app.get("/", function (req, res) {
  var studentId = req.query.id.studentId; //YS: Incorrect destructuring 

  var searchedStudent = students("l").filter(function (student) {
    return student.id === studentId;
  });
  res.send({
    searchedStudent: searchedStudent
  });
});
app.get("/:id", function (req, res) {
  try {
    var id = req.params.id;
    var searchedStudent = students("l").filter( //YS: You can use find instead of filter 
    function (student) {
      return student.id === id;
    });
    var result = searchedStudent.length === 0 ? "Student not Found" : searchedStudent;
    res.send({
      result: result
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      error: error.message
    }); //YS: Nice
  }
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});