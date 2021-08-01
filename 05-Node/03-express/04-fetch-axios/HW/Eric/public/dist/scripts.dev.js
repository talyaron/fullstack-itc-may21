"use strict";

var stud = document.querySelector('.stud'); //btn

var btnGetDataQuery = document.querySelector('.containerPage__containerForm2--submitQuerys');
var btnGetDataParams = document.querySelector('.containerPage__containerForm2--submitParams'); //inputID

var inputId = document.querySelector('.containerPage__containerForm2--input');
btnGetDataQuery.addEventListener('click', getDataQuery);
btnGetDataParams.addEventListener('click', getDataParam);
stud.addEventListener('click', loadStudents);

function getDataQuery(ev) {
  var html = '';
  ev.preventDefault();
  var id = inputId.valueAsNumber;
  axios.get("/aa?id=".concat(id)).then(function (_ref) {
    var data = _ref.data;
    render(html, data);
  });
}

function getDataParam(ev) {
  var html = '';
  ev.preventDefault();
  var id = inputId.valueAsNumber;
  axios.get("/aa/".concat(id)).then(function (_ref2) {
    var data = _ref2.data;
    render(html, data);
  });
}

function handleSubmit(ev) {
  ev.preventDefault();
  var name = ev.target.name.value;
  var age = ev.target.age.value;
  var avgGrade = ev.target.avgGrade.value;
  axios.post('/aa', {
    name: name,
    age: age,
    avgGrade: avgGrade
  }).then(function (res) {
    console.log(res);
  });
}

function loadStudents(ev) {
  var html = '';
  ev.preventDefault();
  var list = document.getElementById("root");
  axios.get('/aa').then(function (_ref3) {
    var data = _ref3.data;
    data.forEach(function (element) {
      html += "<div>".concat(element.name, ", ").concat(element.id, ",<div>");
    });
    list.innerHTML = html;
  });
}