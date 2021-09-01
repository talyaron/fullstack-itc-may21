"use strict";
exports.__esModule = true;
exports.randomStudents = exports.searchByLastname = exports.editStudent = exports.bringStudent = exports.deleteStudent = exports.getStudents = exports.addStudent = void 0;
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
function deleteStudent(req, res) {
    var id = req.params.id;
    students.deleteStudent(id);
    res.send({ message: "student deleted" });
}
exports.deleteStudent = deleteStudent;
function bringStudent(req, res) {
    var id = req.params.id;
    var student = students.findStudentById(id);
    res.send({ student: student });
}
exports.bringStudent = bringStudent;
function editStudent(req, res) {
    var id = req.params.id;
    var allStudents = students.editStudent(req.body, id);
    res.send({ students: allStudents });
}
exports.editStudent = editStudent;
function searchByLastname(req, res) {
    var searchLastname = req.body.searchLastname;
    var findStudents = students.searchStudentsByLastname(searchLastname);
    res.send({ students: findStudents });
}
exports.searchByLastname = searchByLastname;
function randomStudents(req, res) {
    var random = req.body.random;
    console.log(random);
    var studentsRandom = students.randomStudent(random);
    res.send({ students: studentsRandom });
}
exports.randomStudents = randomStudents;
