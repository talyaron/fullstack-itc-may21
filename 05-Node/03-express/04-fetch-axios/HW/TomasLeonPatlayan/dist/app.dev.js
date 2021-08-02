"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var express = require("express");

var app = express();

var fs = require("fs"); // const cors = require("cors");   YS: If you are not using this please remove it. 
// app.use(cors());
//JSON


var localJson = function localJson() {
  var fileJson = fs.readFileSync("./db-student.json");
  return JSON.parse(fileJson);
}; //Settings


app.set("port", 3500 || process.env.PORT); //MidelWare

app.use(express.json()); //Routes

app.get("/getStudents", function (req, res) {
  var students = localJson();
  res.send(students);
});
app.get("/getStudentQuery", function (req, res) {
  var id = req.query.id;
  id = parseInt(id);
  var students = localJson();
  var findStudent = students.find(function (student) {
    return student.id === id;
  });
  res.send([findStudent]);
});
app.get("/getStudentParams/:id", function (req, res) {
  var id = req.params.id;
  id = parseInt(id);
  var students = localJson();
  var findStudent = students.find(function (student) {
    return student.id === id;
  });
  res.send([findStudent]);
});
app.post("/postStudents", function (req, res) {
  try {
    var _req$body = req.body,
        name = _req$body.name,
        id = _req$body.id,
        age = _req$body.age,
        avgrade = _req$body.avgrade; //YS: You shouldn't be sending the id in the body, you should be adding it with uuidv4(). The id is created in the server/database. 

    var students = localJson();
    var addStudent = {
      id: parseInt(id),
      //YS: id: uuidv4(), 
      name: name,
      age: parseInt(age),
      avgrade: parseInt(avgrade)
    }; // function getStudent() {
    //   return function __getInfo(addStudent) {        YS: Please remove commented code 
    //     return addStudent;
    //   };
    // }
    // const student = getStudent();

    students.push(addStudent);
    fs.writeFileSync("./db-student.json", JSON.stringify(students));
    res.send(students);
  } catch (error) {
    alert(error);
  }
});
app["delete"]("/deleteStudents/:id", function (req, res) {
  var id = req.params.id;
  console.log(id); //YS: Remove console.log

  id = parseInt(id);
  var students = localJson();
  var deleteStudent = students.filter(function (student) {
    return student.id !== id;
  });
  fs.writeFileSync("./db-student.json", JSON.stringify(deleteStudent));
  res.send(_toConsumableArray(deleteStudent)); //! COPIO EL ARRAY
});
app.use(express["static"]("public")); //Listen

app.listen(app.get("port"), function () {
  console.log("app listening at http://localhost:".concat(app.get("port")));
});