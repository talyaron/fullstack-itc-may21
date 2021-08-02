"use strict";

//For Yonotan: I finished assignment before fridays class which is why I didn't use the newest promise methods.. I will do from now on!
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
    axios.put("/addStudent", {
      //POST! 
      name: name,
      age: age,
      studentID: studentID,
      averageGrade: averageGrade
    }).then(function (_ref) {
      var data = _ref.data;
      console.log(data);
    });
    alert("Submitted Succesfuly!"); //YS: Good

    ev.target.reset();
  } catch (e) {
    console.error(e);
  }
}

var firstForm = document.querySelector(".firstForm");
firstForm.addEventListener("submit", handleStudent);

function handleStudentSearchQuery(event) {
  try {
    event.preventDefault();
    var list = document.querySelector(".holder");
    var searchQuery = event.target.children.searchQuery.valueAsNumber;
    axios.get("/getStudentQuery?id=".concat(searchQuery)).then(function (_ref2) {
      var data = _ref2.data;
      console.log(data);
    });
    event.target.reset();
    axios.get("/getStud").then(function (res) {
      return list.innerHTML = res.data.html;
    }); //YS: Why are you doing this? You should only have the get with Query, and then send the student back
  } catch (e) {
    console.error(e);
  }
}

var secondForm = document.querySelector(".secondForm");
secondForm.addEventListener("submit", handleStudentSearchQuery);

function handleStudentSearchParam(event) {
  event.preventDefault();

  try {
    var list = document.querySelector(".holder");
    var searchParam = event.target.children.searchParam.valueAsNumber;
    axios.get("/getStudentParam/".concat(searchParam)).then(function (_ref3) {
      var data = _ref3.data;
      console.log(data);
    });
    event.target.reset();
    axios.get("/getStud").then(function (res) {
      return list.innerHTML = res.data.html;
    }); //YS: Same as above, you shouldnt be doing a second get request.
    //You should just send back the student you looked for and display it in the DOM (with a render function)
  } catch (e) {
    console.error(e);
  }
}

var thirdForm = document.querySelector(".thirdForm");
thirdForm.addEventListener("submit", handleStudentSearchParam);