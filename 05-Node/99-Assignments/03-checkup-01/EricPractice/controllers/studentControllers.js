"use strict";
exports.__esModule = true;
exports.getStudents = exports.addStudent = void 0;
var student_1 = require("../models/student");
//ponerlo siempre afuera, sino no agrega al array y sobre escribe al renderizar
var students = new student_1.Students();
function addStudent(req, res) {
    var _a = req.body, firstname = _a.firstname, lastname = _a.lastname, age = _a.age;
    var student = new student_1.Student(firstname, lastname, age);
    students.addStudent(student);
    res.send({ students: students });
}
exports.addStudent = addStudent;
function getStudents(req, res) {
    res.send({ students: students });
}
exports.getStudents = getStudents;
