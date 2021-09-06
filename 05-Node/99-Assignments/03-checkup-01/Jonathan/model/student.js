"use strict";
exports.__esModule = true;
exports.Students = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name) {
        this.id = Math.random().toString(16);
        this.name = name;
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
        return this.students;
    };
    Students.prototype.getRandomStudent = function (number) {
        //
    };
    Students.prototype.removeStudent = function (studentId) {
        //
    };
    return Students;
}());
exports.Students = Students;
