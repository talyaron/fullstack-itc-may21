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
    };
    Students.prototype.removeStudent = function (studentId) {
        console.log('remove student');
    };
    Students.prototype.randomStudents = function (number) {
        try {
            //I need a copy of the array to not modify the original
            var copyOfArray = JSON.parse(JSON.stringify(this.students));
            var randomStudents = [];
            for (var index = 0; index < number; index++) {
                var index_1 = Math.floor(Math.random() * copyOfArray.length);
                var student = copyOfArray[index_1];
                randomStudents.push(student);
                copyOfArray.splice(index_1, 1);
                console.log(copyOfArray);
            }
            return randomStudents;
        }
        catch (error) {
            console.error(error);
        }
    };
    return Students;
}());
exports.Students = Students;
