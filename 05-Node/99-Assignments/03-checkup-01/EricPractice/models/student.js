"use strict";
exports.__esModule = true;
exports.Students = exports.Student = exports.readAllStudents = void 0;
var fs = require("fs");
var path = require("path");
var uuidv4 = require("uuid").v4;
var allStudentsJSON = path.resolve(__dirname, "models/json/students.json");
exports.readAllStudents = function () {
    var allUStudents = fs.readFileSync("models/json/students.json");
    return JSON.parse(allUStudents);
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
    Students.prototype.findStudentByName = function (firstname) {
        var isFound = this.students.find(function (student) { return student.firstname === firstname; });
        return isFound;
    };
    Students.prototype.writeAllStudents = function () {
        fs.writeFileSync("models/json/students.json", JSON.stringify(this.students));
    };
    Students.prototype.findStudentById = function (id) {
        var studentSelected = this.students.find(function (student) { return student.id === id; });
        return studentSelected;
    };
    Students.prototype.editStudent = function (body, id) {
        var studentFound = this.findStudentById(id);
        studentFound.firstname = body.firstname;
        studentFound.lastname = body.lastname;
        studentFound.age = body.age;
        this.writeAllStudents();
        return this.students;
    };
    return Students;
}());
exports.Students = Students;
