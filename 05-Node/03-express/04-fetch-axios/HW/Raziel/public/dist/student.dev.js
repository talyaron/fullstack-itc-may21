"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var formOne = document.querySelector('.formOne');

var Student = function Student(name, age, grade, id) {
  _classCallCheck(this, Student);

  this.name = name;
  this.age = age;
  this.grade = grade;
  this.id = id;
};

function handelSubmit(ev) {
  ev.preventDefault();
  var name = ev.target.elements.name.value;
  var age = ev.target.elements.age.value;
  var grade = ev.target.elements.grade.value;
  var id = ev.target.elements.id.value;
  var newStudent = new Student(name, age, grade, id);
  console.log(newStudent);
  axios.put('/newStudent', {
    newStudent: newStudent
  }).then(function (res) {
    console.log(res.data.student);
  })["catch"](function (e) {
    console.error(e);
  });
  ev.target.reset();
}

formOne.addEventListener('submit', handelSubmit);