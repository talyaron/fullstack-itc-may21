"use strict";
exports.__esModule = true;
exports.isFirstNameExist = void 0;
var student_1 = require("../models/student");
var students = new student_1.Students();
function isFirstNameExist(req, res, next) {
    var _a = req.body, firstname = _a.firstname, actions = _a.actions;
    var id = req.params.id;
    if (students === undefined)
        next();
    else {
        var isSameName = students.findStudentByName(firstname);
        if (actions === 0) {
            if (isSameName)
                res.status(404).send({ error: "First name already exists" });
            else
                next();
        }
        else {
            var findStudent = students.findStudentById(id);
            if (isSameName === undefined || findStudent.firstname === firstname)
                next();
            else {
                if (isSameName)
                    res.status(404).send({ error: "First name already exists" });
                else
                    next();
            }
        }
    }
}
exports.isFirstNameExist = isFirstNameExist;
