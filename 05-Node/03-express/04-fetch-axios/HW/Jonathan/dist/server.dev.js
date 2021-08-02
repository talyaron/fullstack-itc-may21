"use strict";

var express = require("express");

var app = express();
var port = process.env.port || 3000;

var fs = require("fs");

app.use(express["static"]("public"));
app.use(express.json());

var readAllStudents = function readAllStudents() {
  var allStudents = fs.readFileSync("./allstudents.json");
  return JSON.parse(allStudents);
};

app.post("/addStudent", function (req, res) {
  try {
    var getStudent = function getStudent() {
      return function __getInfo(newStudent) {
        //YS: I didnt understand where you got the __getinfo function from...
        return newStudent;
      };
    };

    var _req$body = req.body,
        id = _req$body.id,
        name = _req$body.name,
        age = _req$body.age,
        avgrade = _req$body.avgrade;
    var newStudent = {
      /* YS: Why are you doing this if newStudent will be the same as the req.body? DRY
        Also, you should be adding the ID here. The ID and another field called dateCreated should be
        managed by the BE*/
      id: id,
      name: name,
      age: age,
      avgrade: avgrade
    };

    if (!name || !id || !age || !avgrade) {
      throw new Error("Don't have any of the element of the json object");
    }

    var allStudents = readAllStudents();
    var isFound = allStudents.some(function (student) {
      return student.id == id;
    });
    if (isFound) throw new Error("This Mispar Zehut is already here");

    var _student = getStudent();

    console.log(_student(newStudent));
    allStudents.push(_student(newStudent));
    fs.writeFileSync("./allstudents.json", JSON.stringify(allStudents));
    res.send({
      ok: "Added Student"
    });
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
});
app.get("/getAllStudents", function (req, res) {
  var allStudents = readAllStudents();
  allStudents.sort(function (a, b) {
    return a.id - b.id;
  }); //YS: Nice! 

  res.send(allStudents);
});
app["delete"]("/deleteStudent/:id", function (req, res) {
  try {
    var id = req.params.id;
    var allStudents = readAllStudents();
    id = +id; //YS: Nice! 

    allStudents = allStudents.filter(function (student) {
      return student.id !== id;
    });
    fs.writeFileSync("./allstudents.json", JSON.stringify(allStudents));
    allStudents.sort(function (a, b) {
      return a.id - b.id;
    });
    res.send(allStudents);
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
});
app.get("/getStudentbyParam/:id", function (req, res) {
  try {
    var id = req.params.id;
    id = +id;
    var allStudents = readAllStudents();

    var _student2 = allStudents.find(function (student) {
      return student.id === id;
    });

    if (!_student2) throw new Error('This Mispar Zehut does not exist');
    res.send([_student2]);
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
});
app.get("/getStudentbyQuery", function (req, res) {
  try {
    var id = req.query.id;
    id = +id;
    var allStudents = readAllStudents();
    student = allStudents.find(function (student) {
      return student.id === id;
    });
    if (!student) throw new Error('This Mispar Zehut does not exist');
    res.send([student]);
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});