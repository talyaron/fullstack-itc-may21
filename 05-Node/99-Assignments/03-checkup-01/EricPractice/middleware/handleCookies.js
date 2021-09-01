"use strict";
exports.__esModule = true;
exports.writeCookie = void 0;
var student_1 = require("../models/student");
var secret_1 = require("../secret/secret");
var jwt = require('jwt-simple');
function writeCookie(req, res, next) {
    var _a = req.body, firstName = _a.firstName, lastName = _a.lastName, age = _a.age;
    var student = new student_1.Student(firstName, lastName, age);
    var id = { id: student.id };
    var tokenStudent = jwt.encode(id, secret_1.secret);
    res.cookie('cookieName', tokenStudent, { maxAge: 300000000, httpOnly: true });
    req.students = student;
}
exports.writeCookie = writeCookie;
