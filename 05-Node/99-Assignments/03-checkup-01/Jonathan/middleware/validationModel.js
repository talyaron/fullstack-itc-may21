"use strict";
exports.__esModule = true;
exports.isFirstNameExist = void 0;
var student_1 = require("../models/student");
var students = new student_1.Students();
function isFirstNameExist(req, res, next) {
    var firstname = req.body.firstname;
    var isSameName = students.findStudentByName(firstname);
    if (isSameName)
        res.status(404).send({ error: "First name already exists" });
    else
        next();
}
exports.isFirstNameExist = isFirstNameExist;
