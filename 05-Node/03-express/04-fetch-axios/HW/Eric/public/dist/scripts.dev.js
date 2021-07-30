"use strict";

var pepe = document.querySelector('.pepe');
pepe.addEventListener('click', loadStudents);

function handleSubmit(ev) {
  ev.preventDefault();
  var name = ev.target.name.value;
  var age = ev.target.age.value;
  var id = ev.target.id.value;
  var avgGrade = ev.target.avgGrade.value;
  axios.post('/aa', {
    name: name,
    age: age,
    id: id,
    avgGrade: avgGrade
  }).then(function (res) {//console.log(res)
  });
}

function loadStudents(ev) {
  var html = '';
  ev.preventDefault();
  var list = document.getElementById("root");
  axios.get('/aa').then(function (_ref) {
    var data = _ref.data;
    data.forEach(function (element) {
      html += "<div>".concat(element.name, ", ").concat(element.id, ",<div>");
    });
    list.innerHTML = html;
  });
}

function handleGetParams(ev) {
  ev.preventDefault();
  var studentId = ev.target.studentId.value;
  console.log(studentId);
}

function handleGetQuery(ev) {
  ev.preventDefault();
  console.log('hola');
} // handleGetQuery()
// handleGetParams()