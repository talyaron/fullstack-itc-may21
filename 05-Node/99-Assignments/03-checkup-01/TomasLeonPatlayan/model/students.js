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
    }
    Students.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Students.prototype.getRandomStudent = function (number) {
        console.log('RandomStudent');
    };
    Students.prototype.removeStudent = function (studentIs) {
        console.log('RemoceStudent');
    };
    return Students;
}());
exports.Students = Students;
