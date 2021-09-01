"use strict";
exports.__esModule = true;
exports.getRandomStudent = exports.addStudent = exports.getStudent = void 0;
var student_1 = require("../model/student");
var students = new student_1.Students();
function getStudent(req, res) {
    res.send(students);
}
exports.getStudent = getStudent;
function addStudent(req, res) {
    try {
        var name = req.body.name;
        if (!name)
            throw new Error('No student was transfered');
        var newStudent = new student_1.Student(name);
        students.addStudent(newStudent);
        res.send({ students: students.students });
    }
    catch (error) {
        console.error(error);
    }
}
exports.addStudent = addStudent;
function getRandomStudent(req, res) {
    try {
        var randomStudent = students.randomStudents(3);
        res.send({ students: randomStudent });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getRandomStudent = getRandomStudent;
