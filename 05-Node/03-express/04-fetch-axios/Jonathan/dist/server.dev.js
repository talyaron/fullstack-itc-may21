"use strict";

var _require = require("assert"),
    _throws = _require["throws"];

var express = require("express");

var app = express();
var port = process.env.port || 3000;

var fs = require("fs");

app.use(express["static"]("public"));
app.use(express.json());

var readAllStudents = function readAllStudents() {
  var allStudents = fs.readFileSync('./allstudents.json');
  return JSON.parse(allStudents);
};

app.post("/addStudent", function (req, res) {
  try {
    var getStudent = function getStudent() {
      return function __getInfo(newStudent) {
        return newStudent;
      };
    };

    var _req$body = req.body,
        id = _req$body.id,
        name = _req$body.name,
        age = _req$body.age,
        avgrade = _req$body.avgrade;
    var newStudent = {
      id: parseInt(id),
      name: name,
      age: parseInt(age),
      avgrade: parseInt(avgrade)
    };

    if (!name || !id || !age || !avgrade) {
      throw new Error("Don't have any of the element of the json object");
    }

    var allStudents = readAllStudents();
    var isFound = allStudents.some(function (student) {
      return student.id == id;
    });
    if (isFound) throw new Error("This is id is already here");

    var _student = getStudent();

    allStudents.push(_student(newStudent));
    fs.writeFileSync("./allstudents.json", JSON.stringify(allStudents));
    res.send("Student Added");
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
});
app.get("/getAllStudents", function (req, res) {
  var allStudents = readAllStudents();
  res.send(allStudents);
});
app["delete"]("/deleteStudent/:id", function (req, res) {
  try {
    var id = req.params.id;
    var allStudents = readAllStudents();
    id = parseInt(id);
    allStudents = allStudents.filter(function (student) {
      return student.id !== id;
    });
    fs.writeFileSync("./allstudents.json", JSON.stringify(allStudents));
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
    id = parseInt(id);
    var allStudents = readAllStudents();

    var _student2 = allStudents.find(function (student) {
      return student.id === id;
    });

    if (!_student2) throw new Error('This id does not exist');
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
    id = parseInt(id);
    var allStudents = readAllStudents();
    student = allStudents.find(function (student) {
      return student.id === id;
    });
    if (!student) throw new Error('This id does not exist');
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