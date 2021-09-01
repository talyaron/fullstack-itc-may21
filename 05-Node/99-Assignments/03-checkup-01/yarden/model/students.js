"use strict";
exports.__esModule = true;
exports.myStudents = exports.Students = exports.Student = void 0;
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
    Students.prototype.getRandomStudents = function (number) {
        console.log('getRandomStudents');
    };
    Students.prototype.removeStudent = function (studentId) {
        console.log('removeStudent');
    };
    return Students;
}());
exports.Students = Students;
exports.myStudents = new Students();
