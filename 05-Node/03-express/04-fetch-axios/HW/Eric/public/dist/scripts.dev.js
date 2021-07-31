"use strict";

var stud = document.querySelector('.stud'); //btn

var btnGetDataQuery = document.querySelector('.containerPage__containerForm2--submitQuerys');
var btnGetDataParams = document.querySelector('.containerPage__containerForm2--submitParams'); //inputID

var inputId = document.querySelector('.containerPage__containerForm2--input'); // btnGetDataQuery.addEventListener('click', getDataQuery)
// btnGetDataParams.addEventListener('click', getDataParam)

stud.addEventListener('click', loadStudents); // function getDataQuery(ev) {
//     let html = ''
//     ev.preventDefault()
//     const id = inputId.valueAsNumber
//     axios.put('/updateAvenger', { id })
//         .then(({ data }) => {
//             render(html, data)
//         })
//         console.log('hola')
// }

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