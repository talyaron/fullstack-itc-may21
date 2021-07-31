"use strict";

var showStudents = document.querySelector("#showStudents");
var handleForm = document.querySelector(".form");
var informationParams = document.querySelector("#informationParams");
var informationQuerys = document.querySelector("#informationQuerys");
var searchId = document.querySelector('#searchId'); //To handle the form to add a new Student:

handleForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  try {
    event.preventDefault();
    var _event$target$element = event.target.elements,
        firstname = _event$target$element.firstname,
        lastname = _event$target$element.lastname,
        age = _event$target$element.age,
        averageGrade = _event$target$element.averageGrade;
    firstname = firstname.value;
    lastname = lastname.value;
    age = age.valueAsNumber;
    averageGrade = averageGrade.valueAsNumber;
    if (!firstname || !lastname || !age || !averageGrade) throw new Error("You need to complete all the fields");
    modalUpload.style.display = "none";
    event.target.reset(); //Get data from the form as an object

    axios.post('/addStudent', {
      firstname: firstname,
      lastname: lastname,
      age: age,
      averageGrade: averageGrade
    }).then(function (_ref) {
      var data = _ref.data;
      console.log(data);
    });
  } catch (e) {
    console.error();
  }
} //To handle the "show all the students" button: 


showStudents.addEventListener('click', getData);

function getData() {
  axios.get('/getStudents').then(function (_ref2) {
    var data = _ref2.data;
    render(data);
  });
}

function render(data) {
  var table = document.querySelector(".table");
  if (!table) throw new Error('There is a problem finding table from HTML');
  var html = data.map(function (element) {
    return "\n        <tr>\n        <td>".concat(element.id, "</td>\n        <td>").concat(element.firstname, "</td>\n        <td>").concat(element.lastname, "</td> \n        <td>").concat(element.age, "</td> \n        <td>").concat(element.averageGrade, "</td> \n        </tr>");
  }).join('');
  table.innerHTML = html;
} //To handle the button "by params" and show the information of the student:


informationParams.addEventListener('click', getStudentParam);

function getStudentParam() {
  axios.get("/showStudentParam/".concat(searchId.value)).then(function (_ref3) {
    var data = _ref3.data;
    render(data);
  });
} //To handle the button "by querys" and show the information of the student:


informationQuerys.addEventListener('click', getStudentQuery);

function getStudentQuery() {
  axios.get("/showStudentQuery?id=".concat(searchId.value)).then(function (_ref4) {
    var data = _ref4.data;
    render(data);
  });
}