"use strict";
exports.__esModule = true;
exports.Students = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name) {
        this.id = Math.random().toString(16);
        this.name = name;
        console.log(this.id);
    }
    return Student;
}());
exports.Student = Student;
var Students = /** @class */ (function () {
    function Students() {
    }
    Students.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Students.prototype.getRandomStudent = function (number) {
        console.log('getRandomStudent');
    };
    Students.prototype.removeStudent = function (studentId) {
        console.log('removeStudent');
    };
    return Students;
}());
exports.Students = Students;
