"use strict";

function addStudentPromise(newStudent) {
  return new Promise(function (resolve, reject) {
    fetch('/addStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStudent)
    }).then(function (res) {
      if (res.status === 200 && res.ok) {
        return res.json().then(function (student) {
          alert(student.ok);
        });
      } else {
        return res.json().then(function (student) {
          alert(student.error);
        });
      }
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

function getOneStudent(howGetStudent) {
  var inputSearchStudenbyID = document.querySelector('#searchid');
  var id = inputSearchStudenbyID.value;
  var route = howGetStudent === 'query' ? "/getStudentbyQuery?id=".concat(id) : "/getStudentbyParam/".concat(id);
  return new Promise(function (resolve, reject) {
    fetch(route).then(function (res) {
      if (res.status === 200 && res.ok) {
        return res.json().then(function (student) {
          resolve(student);
        });
      } else {
        return res.json().then(function (student) {
          alert(student.error);
        });
      }
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