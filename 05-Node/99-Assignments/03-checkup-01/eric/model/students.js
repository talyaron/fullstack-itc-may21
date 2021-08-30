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
        this.students = [];
    }
    Students.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Students.prototype.getRandomStudent = function (number) {
        console.log('getRandomStudent');
        var students = JSON.parse(JSON.stringify(this.students));
        var randomStudent = [];
        for (var i = 0; i < number && students.length > 0; i++) {
            var index = Math.floor(Math.random() * students.length);
            var student = students[index];
            randomStudent.push(student);
            students.splice(index, 1);
        }
        return randomStudent;
    };
    Students.prototype.removeStudent = function (studentId) {
        console.log('removeStudent');
    };
    return Students;
}());
exports.Students = Students;
