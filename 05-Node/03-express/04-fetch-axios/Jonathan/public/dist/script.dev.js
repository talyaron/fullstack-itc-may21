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
  var id, name, age, avgrade, student;
  return regeneratorRuntime.async(function handleSumbit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          ev.preventDefault();
          id = ev.target.elements.id.value;
          name = ev.target.elements.name.value;
          age = ev.target.elements.age.value;
          avgrade = ev.target.elements.avgrade.value;
          _context.next = 8;
          return regeneratorRuntime.awrap(addStudentPromise(id, name, age, avgrade));

        case 8:
          student = _context.sent;
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
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
          return regeneratorRuntime.awrap(getStudentParamsPromise());

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
          return regeneratorRuntime.awrap(getStudentQueryPromise());

        case 3:
          student = _context4.sent;
          renderStudents(student);

        case 5:
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

function addStudentPromise(id, name, age, avgrade) {
  return new Promise(function (resolve, reject) {
    fetch('/addStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        name: name,
        age: age,
        avgrade: avgrade
      })
    }).then(function (r) {
      return r.json();
    }).then(function (r) {
      return alert(r.error);
    }).then(function (student) {
      resolve(student);
    })["catch"](function (e) {
      reject(e);
    });
  });
}

function deleteStudentPromise(id) {
  return new Promise(function (resolve, reject) {
    fetch("/deleteStudent/".concat(id), {
      method: 'DELETE'
    }).then(function (r) {
      return r.json();
    }).then(function (student) {
      resolve(student);
    })["catch"](function (e) {
      reject(e);
    });
  });
}

function getStudentQueryPromise() {
  var id = inputSearchStudenbyID.value;
  return new Promise(function (resolve, reject) {
    fetch("/getStudentbyQuery?id=".concat(id)).then(function (r) {
      return r.json();
    }).then(function (student) {
      resolve(student);
    })["catch"](function (e) {
      reject(e);
    });
  });
}

function getStudentParamsPromise() {
  var id = inputSearchStudenbyID.value;
  return new Promise(function (resolve, reject) {
    fetch("/getStudentbyParam/".concat(id)).then(function (r) {
      return r.json();
    }).then(function (student) {
      resolve(student);
    })["catch"](function (e) {
      reject(e);
    });
  });
}

function getAllStudentsPromise() {
  return new Promise(function (resolve, reject) {
    fetch('/getAllStudents').then(function (r) {
      return r.json();
    }).then(function (student) {
      resolve(student);
    })["catch"](function (e) {
      reject(e);
    });
  });
}

function renderStudents(data) {
  var html = '';

  if (data.length > 0) {
    html += "<table id=\"students\">\n        <thead>\n    <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Age</th>\n        <th>Average Grade</th>\n        <th></th>\n    <tr>\n    </thead>\n    <tbody>";
    data.forEach(function (elem) {
      html += "<tr>\n                      <td>".concat(elem.id, "</td>\n                        <td>").concat(elem.name, "</td>\n                        <td>").concat(elem.age, "</td>\n                        <td>").concat(elem.avgrade, "</td>\n                        <td><i class=\"fa fa-trash \" onclick='deleteStudent(\"").concat(elem.id, "\")' title=\"Delete Item\"></i></td>   \n                 </tr> ");
    });
    html += "</tbody></table>";
  } else {
    var _html = '';
  }

  boardStudent.innerHTML = html;
}