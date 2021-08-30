"use strict";
exports.__esModule = true;
exports.addStudent = exports.getStudents = void 0;
var students_1 = require("../model/students");
var students = new students_1.Students();
function getStudents(req, res) {
    res.send({ students: students });
}
exports.getStudents = getStudents;
function addStudent(req, res) {
    try {
        var name = req.body;
        if (!name)
            throw new Error('no student was transfered');
        var student = new students_1.Student(name);
        students.addStudent(student);
        console.log('student');
        res.send({ students: students.students });
    }
    catch (err) {
    }
}
exports.addStudent = addStudent;
