"use strict";
exports.__esModule = true;
exports.allStudentsA = void 0;
var students_1 = require("../model/students");
function allStudentsA(req, res) {
    res.send(students_1.classA);
}
exports.allStudentsA = allStudentsA;
