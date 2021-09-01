"use strict";
exports.__esModule = true;
exports.add_Student = exports.getStudents = void 0;
var students_1 = require("../model/students");
var students = new students_1.Students();
function getStudents(req, res) {
    res.send({ getStudents: true });
}
exports.getStudents = getStudents;
function add_Student(req, res) {
    try {
        var name = req.body.name;
        if (!name)
            throw new Error('No Student');
        var newStudent = new students_1.Student(name);
        students.addStudent(newStudent);
        res.send({ students: students.students });
    }
    catch (error) {
        console.error(error);
    }
    var student = req.body.student;
}
exports.add_Student = add_Student;
