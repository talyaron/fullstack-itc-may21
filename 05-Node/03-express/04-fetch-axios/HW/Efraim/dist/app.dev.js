"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

app = express();
var port = process.env.PORT || 5000;
app.use(express.json());

var Ajv = require("ajv");

var ajv = new Ajv();
app.use(express["static"]('public'));

var Student = function Student(name, age, studentID, averageGrade) {
  _classCallCheck(this, Student);

  this.name = name;
  this.age = age;
  this.studentID = studentID;
  this.averageGrade = averageGrade;
};

var Students =
/*#__PURE__*/
function () {
  function Students() {
    _classCallCheck(this, Students);

    this.students = [];
  }

  _createClass(Students, [{
    key: "addStudent",
    value: function addStudent(students) {
      try {
        this.students.push(students);
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "findStudentWithID",
    value: function findStudentWithID(stID) {
      try {
        var searchedStudents = this.students.filter(function (student) {
          return student.studentID === parseInt(stID);
        }); //YS: Use find instead of filter -> Filter returns an array, and find returns the element. 

        html = "<div class=\"holder__student\" id=\"".concat(searchedStudents[0].studentID, "\">\n                <div class=\"holder__student__id\">Student ID: ").concat(searchedStudents[0].studentID, "</div>\n                <div class=\"holder__student__name\">Student Name: ").concat(searchedStudents[0].name, "</div>\n                <div class=\"holder__student__age\"> Student Age: ").concat(searchedStudents[0].age, "</div>\n                <div class=\"holder__student__averageGrade\"> Average Grade: ").concat(searchedStudents[0].averageGrade, "%</div>\n                </div>");
        return html;
      } catch (e) {
        console.error(e);
      }
    }
  }]);

  return Students;
}();

var students = new Students();
var html = '';
app.put('/addStudent', function (req, res) {
  //YS: To add an element we use POST, to edit we use PUT! 
  try {
    var schema = {
      type: "object",
      properties: {
        name: {
          type: "string"
        },
        age: {
          type: "integer"
        },
        studentID: {
          type: "integer"
        },
        averageGrade: {
          type: "integer"
        }
      },
      required: ["name", "age", "studentID", "averageGrade"],
      additionalProperties: false
    };
    var validate = ajv.compile(schema); //YS: Very nice! 

    var body = req.body;
    var valid = validate(body);

    if (!valid) {
      validate.errors.forEach(function (err) {
        return console.log(err.message);
      });
      throw new Error("Invalid data was transferd");
    }

    students.addStudent(new Student(body.name, body.age, body.studentID, body.averageGrade));
    res.send(students);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      //YS: Nice! 
      error: e.message
    });
  }
});
app.get('/getStudentQuery', function (req, res) {
  try {
    var searchedID = req.query.id; //YS: Why not destructure (you need to use the same name as the key if you will do that (id))

    var student = students.findStudentWithID(searchedID);
    res.send(student);
  } catch (e) {
    console.error(e);
  }
});
app.get('/getStudentParam/:ID', function (req, res) {
  try {
    var searchedID = req.params.ID;
    var student = students.findStudentWithID(searchedID);
    res.send(student);
  } catch (e) {
    console.error(e);
  }
});
app.get('/getStud', function (req, res) {
  try {
    res.send({
      html: html
    });
  } catch (e) {
    console.error(e);
  }
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});