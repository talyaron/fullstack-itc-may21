"use strict";

var stud = document.querySelector(".containerPage__containerForm1__form1--stud"); //btn

var btnGetDataQuery = document.querySelector(".containerPage__containerForm2--submitQuerys");
var btnGetDataParams = document.querySelector(".containerPage__containerForm2--submitParams"); //inputID

var inputId = document.querySelector(".containerPage__containerForm2--input");
btnGetDataQuery.addEventListener("click", getDataQuery);
btnGetDataParams.addEventListener("click", getDataParam);
stud.addEventListener("click", loadStudents);

function handleSubmit(ev) {
  ev.preventDefault();
  var name = ev.target.name.value;
  var age = ev.target.age.value;
  var avgGrade = ev.target.avgGrade.value;
  axios.post("/postStudents", {
    name: name,
    age: age,
    avgGrade: avgGrade
  }).then(function (res) {
    console.log(res);
  });
}

function loadStudents(ev) {
  //YS: Why do you have two functions that are exactly the same? 
  var html = "";
  ev.preventDefault();
  var list = document.getElementById("root");
  axios.get("/getAllStudents").then(function (_ref) {
    var data = _ref.data;
    data.forEach(function (element) {
      html += "<div>".concat(element.name, ", ").concat(element.age, ",  ").concat(element.avgGrade, ", ").concat(element.id, "  <div>");
    });
    list.innerHTML = html;
  });
}

function render(array) {
  //YS: Why do you have two functions that are exactly the same? 
  var html = "";
  var list = document.getElementById("root");
  array.forEach(function (element) {
    html += "<div>".concat(element.name, ", ").concat(element.age, ",  ").concat(element.avgGrade, ", ").concat(element.id, "  <div>");
  });
  list.innerHTML = html;
}

render(); //YS: Commented code
//axios    
//   function getDataQuery(ev) {
//      axios.get(`/getStudents?id=${inputId.value}`)
//         .then(({ data }) => {
//          render([data])
//          })
//  }
//async

function getDataQuery(ev) {
  var data;
  return regeneratorRuntime.async(function getDataQuery$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get("/getStudents?id=".concat(inputId.value)));

        case 2:
          data = _context.sent;
          render([data.data]);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getDataParam(ev) {
  var data;
  return regeneratorRuntime.async(function getDataParam$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(axios.get("/getStudents/".concat(inputId.value)));

        case 2:
          data = _context2.sent;
          render([data.data]);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
} //  function getDataParam(ev) {
//         axios.get(`/getStudents/${inputId.value}`)
//         .then(({ data }) => {
//             render([data])
//         })
// }