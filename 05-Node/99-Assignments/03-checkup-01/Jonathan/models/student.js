"use strict";
exports.__esModule = true;
exports.Students = exports.Student = exports.readAllStudents = void 0;
var fs = require("fs");
var path = require("path");
var allStudentsJSON = path.resolve(__dirname, "./data/students.json");
var uuidv4 = require("uuid").v4;
exports.readAllStudents = function () {
    try {
        var allStudents = fs.readFileSync(allStudentsJSON);
        return JSON.parse(allStudents);
    }
    catch (error) {
        console.error(error);
    }
};
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
        this.students = exports.readAllStudents();
    }
    Students.prototype.addStudent = function (student) {
        this.students.push(student);
        this.writeAllStudents();
    };
    Students.prototype.deleteStudent = function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
        this.writeAllStudents();
    };
    Students.prototype.editStudent = function (body, id) {
        var studentFound = this.findStudentById(id);
        studentFound.firstname = body.firstname;
        studentFound.lastname = body.lastname;
        studentFound.age = body.age;
        this.writeAllStudents();
        return this.students;
    };
    Students.prototype.findStudentById = function (id) {
        var studentSelected = this.students.find(function (student) { return student.id === id; });
        return studentSelected;
    };
    Students.prototype.findStudentByName = function (firstname) {
        var isFound = this.students.find(function (student) { return student.firstname === firstname; });
        return isFound;
    };
    Students.prototype.randomStudents = function (randomNumber) {
        var randomArray = [];
        var students = JSON.parse(JSON.stringify(this.students));
        for (var i = 0; i < randomNumber && students.length > 0; i++) {
            var index = Math.floor(Math.random() * students.length);
            var studentRandom = students[index];
            randomArray.push(studentRandom);
            students.splice(index, 1);
        }
        return randomArray;
    };
    Students.prototype.searchStudentsByLastName = function (lastname) {
        var regrExp = "^" + lastname;
        var searchTermReg = new RegExp(regrExp, 'i');
        var studentsFoundByLastName = this.students.filter(function (student) { return searchTermReg.test(student.lastname); });
        return studentsFoundByLastName;
    };
    Students.prototype.writeAllStudents = function () {
        fs.writeFileSync(allStudentsJSON, JSON.stringify(this.students));
    };
    return Students;
}());
exports.Students = Students;
