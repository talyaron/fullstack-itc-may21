"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var _require = require('uuid'),
    uuidv4 = _require.v4;

app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public')); // closure for students

function outerStudents() {
  try {
    var innerStudents = function innerStudents(student) {
      try {
        if (student === "get") return _students; //YS: Nice

        _students.unshift(student);

        return _students;
      } catch (error) {
        console.error(error);
      }
    };

    var _students = [];
    return innerStudents;
  } catch (error) {
    console.error(error);
  }
}

var Students =
/** @class */
function () {
  function Students() {
    try {
      this.studentsArray = outerStudents();
    } catch (error) {
      console.error(error);
    }
  }

  Students.prototype.addStudent = function (student) {
    try {
      this.studentsArray(_objectSpread({}, student, {
        uuid: uuidv4()
      })); //YS: Very nice for adding the ID in the BE. We should also add a dateCreated key in the BE and set it to Date.now() or something similar)
    } catch (error) {
      console.error(error);
    }
  };

  Students.prototype.searchStudent = function (studentUuid) {
    var searchedStudent = this.studentsArray('get');
    searchedStudent = searchedStudent.filter(function (student) {
      return student.uuid === studentUuid;
    });
    var result = searchedStudent.length === 0 ? "No student found with uuid ".concat(studentUuid) : searchedStudent;
    return result;
  };

  return Students;
}();

var students = new Students(); //YS: Your routes look very good! 

app.post('/add-student', function (req, res) {
  try {
    var body = req.body;
    students.addStudent(body);
    res.send("".concat(body.name, " added to students list"));
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
});
app.get('/student/:uuid', function (req, res) {
  try {
    var uuid = req.params.uuid;
    res.send(students.searchStudent(uuid));
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
});
app.get('/student', function (req, res) {
  try {
    var uuid = req.query.uuid;
    res.send(students.searchStudent(uuid));
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
});
app.get('/all-students', function (req, res) {
  res.send(students.studentsArray('get'));
});
app.listen(port, function () {
  console.log("listening on port ".concat(port, "..."));
});