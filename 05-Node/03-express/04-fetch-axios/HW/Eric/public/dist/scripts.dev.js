"use strict";

function handleSubmit(ev) {
  ev.preventDefault();
  var name = ev.target.name.value;
  var age = ev.target.age.value;
  var id = ev.target.id.value;
  var avgGrade = ev.target.avgGrade.value;
  console.log(name);
  axios.post('/addStudent', {
    name: name,
    age: age,
    id: id,
    avgGrade: avgGrade
  }).then(function (res) {
    console.log(res);
  });
}

function loadStudents() {
  var list = document.getElementById("root");
  axios.get('/getStudents') // .then(res=>res.data.students.forEach(element => list.innerHTML += ` ${element.name} `))
  .then(function (res) {
    return list.innerText = res.data;
  });
  console.log(list);
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