"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.body.style.backgroundColor = 'aqua';
var formOne = document.querySelector('.formOne');
var formTwo = document.querySelector('.formTwo');
var paramButton = document.querySelector('#paramButton');

var Student = function Student(name, age, grade) {
  _classCallCheck(this, Student);

  this.name = name;
  this.age = age;
  this.grade = grade;
  this.id = Math.random().toString(16).slice(2);
};

formOne.addEventListener('submit', handleSubmit);
formTwo.addEventListener('submit', handleSubmitFormTwo);
paramButton.addEventListener('click', handleClick);

function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.elements.name.value;
  var age = event.target.elements.age.value;
  var grade = event.target.elements.grade.value;
  var newStudent = new Student(name, age, grade);
  axios.put('/newStudent', {
    newStudent: newStudent
  }).then(function (res) {
    console.log(res.data.student);
  })["catch"](function (e) {
    console.error(e);
  });
  event.target.reset();
}

function handleSubmitFormTwo(event) {
  event.preventDefault();
  var id = event.target.elements.id.value;
  axios.get("/".concat(id)).then(function (res) {
    var data = res.data.result;
    render(data);
  });
  event.target.reset();
}

function handleClick(event) {
  var studentId = document.querySelector('#studentId');
  var id = studentId.value;
  axios.get("/".concat(id)).then(function (r) {
    var data = r.data.result;
    render(data);
  });
  formTwo.reset();
}

function render(data) {
  var rootData = document.querySelector('.rootData');
  var html = "";

  if (typeof data === 'string') {
    html += data;
  } else {
    data.forEach(function (student) {
      html += "<p>".concat(student.name, "</p><p>").concat(student.grade, "</p><p>").concat(student.age, "</p>");
    });
  }

  rootData.innerHTML = html;
}