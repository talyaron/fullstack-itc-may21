"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.body.style.backgroundColor = 'lightgreen';
var form = document.querySelector('form');

var Student = function Student(name, age, grade) {
  _classCallCheck(this, Student);

  this.name = name;
  this.age = age;
  this.grade = grade;
  this.id = Math.random().toString(16).slice(2);
};

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.elements.name.value;
  var age = event.target.elements.age.value;
  var grade = event.target.elements.grade.value;
  var newStudent = new Student(name, age, grade);
  axios.put('/newStudent', {
    newStudent: newStudent
  }).then(function (res) {
    console.log(res.data);
  })["catch"](function (e) {
    console.error(e);
  });
  event.target.reset();
}