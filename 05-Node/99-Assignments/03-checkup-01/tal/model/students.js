"use strict";
exports.__esModule = true;
exports.Students = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name) {
        this.id = "id_" + Math.random().toString(16);
        console.log(this.id);
        this.name = name;
    }
    return Student;
}());
exports.Student = Student;
var Students = /** @class */ (function () {
    function Students() {
        this.studentsArray = [];
    }
    Students.prototype.addStudent = function (student) {
        console.log('add student');
        this.studentsArray.push(student);
        console.log('add student 2');
    };
    Students.prototype.getRandomStudents = function (number) {
        console.log('getRandomStudents');
        var students = JSON.parse(JSON.stringify(this.studentsArray));
        var randomStudents = [];
        for (var i = 0; i < number && students.length > 0; i++) {
            var index = Math.floor(Math.random() * students.length);
            var student = students[index];
            randomStudents.push(student);
            students.splice(index, 1);
            console.log(students);
        }
        return randomStudents;
    };
    Students.prototype.removeStudent = function (studentId) {
        console.log('removeStudent');
    };
    return Students;
}());
exports.Students = Students;
