"use strict";
exports.__esModule = true;
exports.addStudents = exports.getStudent = void 0;
var students_1 = require("../model/students");
var student = new students_1.Students();
exports.getStudent = function (req, res) {
    res.send({ student: student });
};
exports.addStudents = function (req, res) {
    try {
        var name = req.body.name;
        if (!name)
            throw new Error('no Stundet was trasfered');
        var newStudent = new students_1.Student(student);
    }
    catch (error) {
    }
};
