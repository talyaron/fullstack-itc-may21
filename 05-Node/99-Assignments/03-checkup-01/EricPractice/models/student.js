"use strict";
exports.__esModule = true;
exports.Students = exports.Student = void 0;
var fs = require("fs");
var uuidv4 = require("uuid").v4;
var Student = /** @class */ (function () {
    function Student(firstname, lastname, age) {
        this.id = uuidv4();
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    return Student;
}());
exports.Student = Student;
var Students = /** @class */ (function () {
    function Students() {
        this.students = [];
    }
    Students.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Students.prototype.findStudentByName = function (firstname) {
        var isFound = this.students.find(function (student) { return student.firstname === firstname; });
        return isFound;
    };
    return Students;
}());
exports.Students = Students;
