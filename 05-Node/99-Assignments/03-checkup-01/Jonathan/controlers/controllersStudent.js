"use strict";
exports.__esModule = true;
exports.addStudent = exports.getStudents = void 0;
var student_1 = require("../model/student");
var students = new student_1.Students();
function getStudents(req, res) {
    res.send({ students: students });
}
exports.getStudents = getStudents;
function addStudent(req, res) {
    try {
        var name = req.body.name;
        if (!name)
            throw new Error('No student was transferred');
        var newStudent = new student_1.Student(name);
        students.addStudent(newStudent);
        res.send({ students: students.students });
    }
    catch (e) {
        res.status(400).send({ error: "" + e.message });
    }
}
exports.addStudent = addStudent;
