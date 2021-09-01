"use strict";
exports.__esModule = true;
exports.isFirstNameExist = void 0;
var student_1 = require("../models/student");
var students = new student_1.Students();
function isFirstNameExist(req, res, next) {
    try {
        var _a = req.body, firstname = _a.firstname, actions = _a.actions;
        var id = req.params.id;
        if (students === undefined)
            next();
        else {
            var isSameName = students.findStudentByName(firstname);
            if (actions === 0) {
                var isSameName_1 = students.findStudentByName(firstname);
                if (isSameName_1)
                    res.status(404).send({ error: "firstname already exist" });
                else
                    next();
            }
            else {
                var findStudent = students.findStudentById(id);
                if (isSameName === undefined || findStudent.firstname === firstname)
                    next();
                else {
                    if (isSameName)
                        res.status(404).send({ error: "firstname already exist" });
                    next();
                }
            }
        }
    }
    catch (error) {
    }
}
exports.isFirstNameExist = isFirstNameExist;
