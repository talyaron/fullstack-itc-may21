"use strict";

//form
//const form = document.getElementById('form')
//btn
var btnGetAllStudent = document.querySelector('.container__main__actions--getallstudents');
var btnGetStudentParams = document.querySelector('.container__main__actions__search--params');
var btnGetStudentQuery = document.querySelector('.container__main__actions__search--query'); //boardRoot

var boardStudent = document.querySelector('#boardStudent'); //addEventListener

btnGetAllStudent.addEventListener('click', getAllStudent);
btnGetStudentParams.addEventListener('click', getStudentParams);
btnGetStudentQuery.addEventListener('click', getStudentQuery); //form.addEventListener('sumbitk', addStudentOnList)
//input

var inputSearchStudenbyID = document.querySelector('#searchid'); //addStudent

function handleSumbit(ev) {
  try {
    ev.preventDefault();
    var id = ev.target.elements.id.value;
    var name = ev.target.elements.name.value;
    var age = ev.target.elements.age.value;
    var avgrade = ev.target.elements.avgrade.value;
    axios.post('/addStudent', {
      id: id,
      name: name,
      age: age,
      avgrade: avgrade
    });
    alert('Student Added');
  } catch (e) {
    console.log(e);
  }
} //getStudent


function getAllStudent(ev) {
  try {
    ev.preventDefault();
    axios.get('/getAllStudents').then(function (_ref) {
      var data = _ref.data;
      if (data.length === 0) throw new Error('No student on the database');
      render(data);
    });
  } catch (e) {
    alert(e);
  }
} //getIdParams


function getStudentParams(ev) {
  ev.preventDefault();
  var id = inputSearchStudenbyID.value;
  axios.get("/getStudentbyParam/".concat(id)).then(function (_ref2) {
    var data = _ref2.data;
    console.log(data);
    render(data);
  });
}

function getStudentQuery(ev) {
  ev.preventDefault();
  var id = inputSearchStudenbyID.value;
  axios.get("/getStudentbyQuery?id=".concat(id)).then(function (_ref3) {
    var data = _ref3.data;
    console.log(data);
    render(data);
  });
}

function deleteStudent(id) {
  console.log(id);
  axios["delete"]("/deleteStudent/".concat(id)).then(function (_ref4) {
    var data = _ref4.data;
    console.log(data);
    render(data);
    alert('Delete Student');
  });
}

function render(data) {
  var html = '';
  html += "<table id=\"students\">\n    <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Age</th>\n        <th>Average Grade</th>\n        <th></th>\n    <tr>";
  data.forEach(function (elem) {
    html += "<tr>\n                      <td>".concat(elem.id, "</td>\n                        <td>").concat(elem.name, "</td>\n                        <td>").concat(elem.age, "</td>\n                        <td>").concat(elem.avgrade, "</td>\n                        <td><i class=\"fa fa-trash \" onclick='deleteStudent(\"").concat(elem.id, "\")' title=\"Delete Item\"></i></td>   \n                 </tr> ");
  });
  html += "</table>";
  boardStudent.innerHTML = html;
}