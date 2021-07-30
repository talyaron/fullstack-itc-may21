"use strict";

function handleStudent(ev) {
  ev.preventDefault();

  try {
    var _ev$target$elements = ev.target.elements,
        name = _ev$target$elements.name,
        age = _ev$target$elements.age,
        studentID = _ev$target$elements.studentID,
        averageGrade = _ev$target$elements.averageGrade;
    name = name.value;
    age = age.valueAsNumber;
    studentID = studentID.valueAsNumber;
    averageGrade = averageGrade.valueAsNumber;
    console.log(name, age);
    axios.put('/addStudent', {
      name: name,
      age: age,
      studentID: studentID,
      averageGrade: averageGrade
    }).then(function (_ref) {
      var data = _ref.data;
      console.log(data);
    });
    ev.target.reset();
  } catch (e) {
    console.error(e);
  }
}

function handleStudentSearchQuery(event) {
  try {
    event.preventDefault();
    var list = document.querySelector("#root");
    var searchQuery = event.target.children.searchQuery.valueAsNumber;
    console.log(searchQuery);
    axios.get("/getStudentQuery?id=".concat(searchQuery)).then(function (_ref2) {
      var data = _ref2.data;
      console.log(data);
    });
    event.target.reset();
    axios.get('/getStud').then(function (res) {
      return list.innerHTML = res.data.html;
    });
  } catch (e) {
    console.error(e);
  }
}

function handleStudentSearchParam(event) {
  event.preventDefault();

  try {
    var list = document.querySelector("#root");
    var searchParam = event.target.children.searchParam.valueAsNumber;
    console.log(searchParam);
    axios.get("/getStudentParam/".concat(searchParam)).then(function (_ref3) {
      var data = _ref3.data;
      console.log(data);
    });
    event.target.reset();
    axios.get('/getStud').then(function (res) {
      return list.innerHTML = res.data.html;
    });
  } catch (e) {
    console.error(e);
  }
}