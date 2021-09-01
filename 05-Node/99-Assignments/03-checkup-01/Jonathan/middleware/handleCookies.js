"use strict";
exports.__esModule = true;
exports.writeCookie = void 0;
var student_1 = require("../models/student");
var secret_1 = require("./secret/secret");
var jwt = require('jwt-simple');
function writeCookie(req, res, next) {
    var _a = req.body, firstname = _a.firstname, lastname = _a.lastname, age = _a.age;
    var student = new student_1.Student(firstname, lastname, age);
    var id = JSON.stringify({ id: student.id });
    var tokenStudent = jwt.encode(id, secret_1.secret);
    res.cookie('cookieStudent', tokenStudent, { maxAge: 3000000000, httpOnly: true });
    req.students = student;
    next();
}
exports.writeCookie = writeCookie;
// export function readCookie(req, res, next) {
//     try {
//         const { cookieStudent } = req.cookies
//         if (!cookieStudent) throw new Error("Nothing is on the cookie")
//         const decoded = jwt.decode(cookieStudent, secret)
//         req.id = decoded
//         next()
//     } catch (e) {
//         res.status(500).send({ error: `${e}` });
//     }
// }
