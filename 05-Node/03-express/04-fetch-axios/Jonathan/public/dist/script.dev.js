"use strict";

form = document.querySelector('#id'); //btn

var btnGetAllStudent = document.querySelector('.container__main__actions--getallstudents');
var btnGetStudentParams = document.querySelector('.container__main__actions__search--params');
var btnGetStudentQuery = document.querySelector('.container__main__actions__search--query'); //boardRoot

var boardStudent = document.querySelector('#boardStudent'); //addEventListener

btnGetAllStudent.addEventListener('click', getAllStudent);
btnGetStudentParams.addEventListener('click', getStudentParams);
btnGetStudentQuery.addEventListener('click', getStudentQuery); //input

var inputSearchStudenbyID = document.querySelector('#searchid'); //addStudent

function handleSumbit(ev) {
  var id, name, age, avgrade, student;
  return regeneratorRuntime.async(function handleSumbit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          ev.preventDefault();
          id = ev.target.elements.id.valueAsNumber;
          name = ev.target.elements.name.value;
          age = ev.target.elements.age.valueAsNumber;
          avgrade = ev.target.elements.avgrade.valueAsNumber;

          if (/^[a-zA-Z]+$/.test(name)) {
            _context.next = 8;
            break;
          }

          throw new Error('The name must be in text');

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(addStudentPromise(id, name, age, avgrade));

        case 10:
          student = _context.sent;
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          alert(_context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
} //getStudent


function getAllStudent(ev) {
  var allStudents;
  return regeneratorRuntime.async(function getAllStudent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          ev.preventDefault();
          _context2.next = 4;
          return regeneratorRuntime.awrap(getAllStudentsPromise());

        case 4:
          allStudents = _context2.sent;

          if (!(allStudents.length === 0)) {
            _context2.next = 7;
            break;
          }

          throw new Error('No student on the database');

        case 7:
          renderStudents(allStudents);
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          alert(_context2.t0);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
} //getIdParams


function getStudentParams(ev) {
  var student;
  return regeneratorRuntime.async(function getStudentParams$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          ev.preventDefault();
          _context3.next = 4;
          return regeneratorRuntime.awrap(getOneStudent('query'));

        case 4:
          student = _context3.sent;
          renderStudents(student);
          _context3.next = 10;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
} //getIdQuery


function getStudentQuery(ev) {
  var student;
  return regeneratorRuntime.async(function getStudentQuery$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          ev.preventDefault();
          _context4.next = 3;
          return regeneratorRuntime.awrap(getOneStudent('query'));

        case 3:
          _context4.next = 5;
          return regeneratorRuntime.awrap(getOneStudent('query'));

        case 5:
          student = _context4.sent;
          renderStudents(student);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function deleteStudent(id) {
  var student;
  return regeneratorRuntime.async(function deleteStudent$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(deleteStudentPromise(id));

        case 2:
          student = _context5.sent;
          renderStudents(student);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function renderStudents(data) {
  var html = '';

  if (data.length > 0) {
    html += "<table id=\"students\" class=\"container__main--board__student\">\n        <thead>\n    <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Age</th>\n        <th>Average Grade</th>\n        <th></th>\n    <tr>\n    </thead>\n    <tbody>";
    data.forEach(function (elem) {
      var id = elem.id,
          name = elem.name,
          age = elem.age,
          avgrade = elem.avgrade;
      html += "<tr>\n                      <td>".concat(id, "</td>\n                        <td>").concat(name, "</td>\n                        <td>").concat(age, "</td>\n                        <td>").concat(avgrade, "</td>\n                        <td><i class=\"fa fa-trash\" onclick='deleteStudent(\"").concat(id, "\")' title=\"Delete Item\" style=\"cursor:pointer\"></i></td>   \n                 </tr> ");
    });
    html += "</tbody></table>";
  } else {
    var _html = '';
  }

  boardStudent.innerHTML = html;
}