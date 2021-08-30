"use strict";
exports.__esModule = true;
exports.Students = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name) {
        this.id = Math.random().toString(16);
        console.log(this.id);
        this.name = name;
    }
    return Student;
}());
exports.Student = Student;
var Students = /** @class */ (function () {
    function Students() {
    }
    Students.prototype.addStudent = function (student) {
        this.student.push(student);
    };
    Students.prototype.getRandomStudent = function (number) {
        console.log('getRandom');
    };
    Students.prototype.deleteStudent = function (number) {
        console.log('delete');
    };
    return Students;
}());
exports.Students = Students;
