"use strict";
exports.__esModule = true;
exports.getRandomStudents = exports.addStudent = exports.getStudents = void 0;
var students_1 = require("../model/students");
var students = new students_1.Students();
function getStudents(req, res) {
    res.send({ students: students.studentsArray });
}
exports.getStudents = getStudents;
function addStudent(req, res) {
    try {
        var name = req.body.name;
        if (!name)
            throw new Error("No student was transferred");
        var student = new students_1.Student(name);
        console.log(student);
        students.addStudent(student);
        console.log('student.......');
        res.send({ students: students.studentsArray });
    }
    catch (error) {
    }
}
exports.addStudent = addStudent;
function getRandomStudents(req, res) {
    var number = req.body.number;
    console.log('getRandomStudents');
    var randomStudents = students.getRandomStudents(number);
    res.send({ students: randomStudents });
}
exports.getRandomStudents = getRandomStudents;
