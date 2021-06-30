"use strict";

/* create one page with data constructed of an array of objects (of your preferred subject)
show all objects on the DOM (responsively)

CREATE: the user can create a new item

FILTER: filter it with a select-option button
    SEARCH: there will be a free search input text, to search within the items (RegEx)

UPDATE: The user can also edit the item name

DELETE: each item can be deleted using a button on the bottom of the item. */
///////////////////////////////////////////////////////////////////////////////////////////////
//Create an enum for the status of a subject:
var Status;

(function (Status) {
  Status["approved"] = "Approved";
  Status["disapproved"] = "Disapproved";
  Status["inProcess"] = "In Process";
})(Status || (Status = {}));

;
var Subject;

(function (Subject) {
  Subject["cyberSecurity"] = "Cyber Security";
  Subject["dataScience"] = "Data Science";
  Subject["fullStack"] = "Full Stack Developer";
})(Subject || (Subject = {})); //Create a class for the student:


var Student =
/** @class */
function () {
  function Student(firstname, lastname, email, date, subject) {
    this.id = "id" + Math.random().toString(16).slice(2);
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.date = date;
    this.subject = subject;
    this.status = Status.inProcess;
  }

  return Student;
}(); //Initialice an array of students empty (I will push al new students there)


var students = []; //Use this function to add all the students created in the other page to the new array "Students"

function addStudentsCreated(studentsData) {
  try {
    if (!studentsData) throw new Error('You can`t access to students data');
    studentsData.forEach(function (element) {
      if (!element.date) {
        element.date = new Date();
      }

      ;
      var studentData = new Student(element.firstname, element.lastname, element.email, element.date, element.subject);
      students.unshift(studentData);
    });
    if (!renderStudents) throw new Error('There is a problem finding the function renderStudents');
    renderStudents(students);
  } catch (error) {
    console.error(error);
  }

  ;
}

;
addStudentsCreated(studentsData);

var handleSubmit = function handleSubmit(ev) {
  ev.preventDefault();

  try {
    var firstname = ev.target.elements.firstname.value;
    var lastname = ev.target.elements.lastname.value;
    var email = ev.target.elements.email.value;
    var subject = ev.target.elements.subject.value;
    var date = ev.target.elements.date.value;
    var student = new Student(firstname, lastname, email, date, subject);
    if (!addNewStudent) throw new Error('There is a problem finding the function addNewStudent');
    addNewStudent(student);
    alert('User uploaded successfully');
    if (!modalUpload) throw new Error('Can`t find modalUpload from the HTML');
    modalUpload.style.display = "none";
    ev.target.reset();
  } catch (error) {
    console.error(error);
  }

  ;
}; //Push all the students that Im creating to the array


function addNewStudent(student) {
  try {
    if (!students) throw new Error('You can`t access to students data');
    students.unshift(student);
    if (!renderStudents) throw new Error('There is a problem finding the function renderStudents');
    renderStudents(students);
  } catch (error) {
    console.error(error);
  }

  ;
}

; //Render all the students

function renderStudents(students) {
  try {
    var table = document.querySelector(".table");
    if (!table) throw new Error('There is a problem finding table from HTML');
    var html = students.map(function (element) {
      return "<tr>\n                <td>" + element.firstname + "</td>\n                <td>" + element.lastname + "</td> \n                <td>" + element.email + "</td> \n                <td>" + element.date + "</td> \n                <td>" + element.subject + "</td> \n                <td>" + element.status + "</td> \n                <td>\n                <i class=\"fas fa-edit table__edit\" onclick='edit(\"" + element.id + "\")' title=\"Edit\"></i>\n                <i class=\"fas fa-trash table__remove\" onclick='remove(\"" + element.id + "\", \"" + element.firstname + "\")' title=\"Remove\"></i>\n                </td>\n                </tr>";
    }).join('');
    table.innerHTML = html;
  } catch (error) {
    console.error(error);
  }

  ;
}

; //This will contain the Student ID to Edit

var studentIdEdit = ''; //To edit a Student

function edit(studentId) {
  try {
    if (!modalEdit) throw new Error('There is a problem finding modalEdit from HTML');
    modalEdit.style.display = "block";
    modalEdit.classList.add("showModal");
    var form = document.querySelector("#formEdit");
    if (!form) throw new Error('There is a problem finding form from HTML');
    var html = this.students.map(function (element) {
      if (element.id === studentId) {
        return "<h1>EDIT STUDENT \uD83D\uDE0E</h1>\n                    <tr>\n                    \n                    <div class=\"form__wrapper\">\n                    <label for=\"firstname\">First name:</label>\n                    <input type=\"text\" name=\"firstname\" id=\"firstname\" maxlength=\"20\" value=" + element.firstname + " required>\n                    </div>\n    \n                    <div class=\"form__wrapper\">\n                    <label for=\"lastname\">Last name:</label>\n                    <input type=\"text\" name=\"lastname\" id=\"lastname\" maxlength=\"20\" value=" + element.lastname + " required>\n                    </div>\n    \n                    <div class=\"form__wrapper\">\n                    <label for=\"email\">Email:</label>\n                    <input type=\"email\" name=\"email\" id=\"email\" value=" + element.email + " required>\n                    </div>\n                    \n                    <div class=\"form__wrapper\">\n                    <label for=\"date\">Inscription date:</label>\n                    <input type=\"date\" name=\"date\" id=\"date\" value=" + element.date + " required>\n                    </div>\n    \n                    <div>\n                        <label for=\"inProcess\">In Process</label>\n                        <input type=\"radio\" id=\"inProcess\" name=\"status\" value=\"" + Status.inProcess + "\" checked />\n    \n                        <label for=\"approved\">Approved</label>\n                        <input type=\"radio\" id=\"approved\" name=\"status\" value=\"" + Status.approved + "\" />\n    \n                        <label for=\"disapproved\">Disapproved</label>\n                        <input type=\"radio\" id=\"disapproved\" name=\"status\" value=\"" + Status.disapproved + "\" />\n                    </div>\n                    <input class=\"form__input--submit\" type=\"submit\" value=\"Save changes\">";
      }
    }).join('');
    form.innerHTML = html;
    studentIdEdit = studentId;
  } catch (error) {
    console.error(error);
  }

  ;
}

; //Handle Edit

var handleEdit = function handleEdit(ev) {
  ev.preventDefault();

  try {
    var firstname = ev.target.elements.firstname.value;
    var lastname = ev.target.elements.lastname.value;
    var email = ev.target.elements.email.value;
    var status = ev.target.elements.status.value;
    var date = ev.target.elements.date.value;
    var edit_1 = students.find(function (element) {
      return element.id === studentIdEdit;
    });
    edit_1.firstname = firstname;
    edit_1.lastname = lastname;
    edit_1.email = email;
    edit_1.date = date;
    edit_1.status = status;
    if (!modalEdit) throw new Error('There is a problem finding modalEdit from HTML');
    modalEdit.style.display = "none";
    ev.target.reset();
    if (!renderStudents) throw new Error('There is a problem to render the students');
    renderStudents(students);
  } catch (error) {
    console.error(error);
  }

  ;
}; //To delete a Student


function remove(studentId, name) {
  try {
    var option = confirm("Are you sure do you want to delete " + name + "?");

    if (option === true) {
      var studentIndex = this.students.findIndex(function (element) {
        return element.id === studentId;
      });
      this.students.splice(studentIndex, 1);
      if (!renderStudents) throw new Error('There is a problem to render the students');
      renderStudents(students);
    }
  } catch (error) {
    console.error(error);
  }
}

;

function handleFilter() {
  try {
    var subject_1 = document.querySelector('#status');
    if (!subject_1) throw new Error('Can`t access to subject in filter');
    var status_1 = document.querySelector('#subject');
    if (!status_1) throw new Error('Can`t access to status in filter');

    if (subject_1.value === '-' && status_1.value !== '-') {
      var studentsFiltered = students.filter(function (element) {
        return element.status === status_1.value;
      });
      checkFilters(studentsFiltered);
    } else if (status_1.value === '-' && subject_1.value !== '-') {
      var studentsFiltered = students.filter(function (element) {
        return element.subject === subject_1.value;
      });
      checkFilters(studentsFiltered);
    } else if (status_1.value === '-' && subject_1.value === '-') {
      renderStudents(students);
    } else {
      var studentsFiltered = students.filter(function (element) {
        return element.subject === subject_1.value && element.status === status_1.value;
      });
      checkFilters(studentsFiltered);
    }

    ;
  } catch (error) {
    console.error(error);
  }

  ;
}

; //Function to render or to add a not found title, depending the results of the filters

function checkFilters(studentsFiltered) {
  try {
    if (studentsFiltered.length === 0) {
      var table = document.querySelector(".table");
      if (!table) throw new Error('There is a problem finding table from HTML');
      var html = "<h1 class=\"table__noFound\"> Elements not found </h1>";
      table.innerHTML = html;
    } else {
      renderStudents(studentsFiltered);
    }
  } catch (error) {
    console.error(error);
  }
}

; //Function to look for a word in the array 

function handleSearch(ev) {
  try {
    ev.preventDefault();
    var search = document.querySelector('#search');
    if (!search) throw new Error('Can`t access to the search in filters');
    var results = checkEnterByUser(search.value);
    checkFilters(results);
  } catch (error) {
    console.error(error);
  }

  ;
}

; //Look for Students with the search term enter by the user (name and lastname), then render the students

function checkEnterByUser(searchTerm) {
  try {
    var searchTermReg_1 = new RegExp(searchTerm, 'gmi');
    var studentResult = students.filter(function (student) {
      return searchTermReg_1.test(student.firstname) || searchTermReg_1.test(student.lastname);
    });
    return studentResult;
  } catch (error) {
    console.error(error);
  }

  ;
}

; //Create the next boolean to control the sort when user clicks

var order = true; //Adding events to sort the array students when user clicks

try {
  var sortName = document.querySelector("#tblData__titles--firstname");
  if (!sortName) throw new Error('There is a problem sorting the name');
  var sortLast = document.querySelector("#tblData__titles--lastname");
  if (!sortLast) throw new Error('There is a problem sorting the lastname');
  var sortEmail = document.querySelector("#tblData__titles--email");
  if (!sortEmail) throw new Error('There is a problem sorting the email');
  var sortDate = document.querySelector("#tblData__titles--date");
  if (!sortDate) throw new Error('There is a problem sorting the date');
  var sortSubject = document.querySelector("#tblData__titles--subject");
  if (!sortSubject) throw new Error('There is a problem sorting the subject');
  var sortStatus = document.querySelector("#tblData__titles--status");
  if (!sortStatus) throw new Error('There is a problem sorting the status');
  sortName.addEventListener('click', function () {
    if (order === true) {
      var sortByFirstName = students.sort(function (a, b) {
        return a.firstname.localeCompare(b.firstname);
      });
      renderStudents(sortByFirstName);
      order = false;
    } else if (order === false) {
      var sortByFirstName = students.sort(function (a, b) {
        return b.firstname.localeCompare(a.firstname);
      });
      renderStudents(sortByFirstName);
      order = true;
    }

    ;
  });
  sortLast.addEventListener('click', function () {
    if (order === true) {
      var sortByLastName = students.sort(function (a, b) {
        return a.lastname.localeCompare(b.lastname);
      });
      renderStudents(sortByLastName);
      order = false;
    } else if (order === false) {
      var sortByLastName = students.sort(function (a, b) {
        return b.lastname.localeCompare(a.lastname);
      });
      renderStudents(sortByLastName);
      order = true;
    }

    ;
  });
  sortEmail.addEventListener('click', function () {
    if (order === true) {
      var sortByEmail = students.sort(function (a, b) {
        return a.email.localeCompare(b.email);
      });
      renderStudents(sortByEmail);
      order = false;
    } else if (order === false) {
      var sortByEmail = students.sort(function (a, b) {
        return b.email.localeCompare(a.email);
      });
      renderStudents(sortByEmail);
      order = true;
    }

    ;
  });
  sortDate.addEventListener('click', function () {
    if (order === true) {
      var sortByDate = students.sort(compareDate);
      renderStudents(sortByDate);
      order = false;
    } else if (order === false) {
      var sortByDate = students.sort(compareDateOposite);
      renderStudents(sortByDate);
      order = true;
    }

    ;
  });
  sortSubject.addEventListener('click', function () {
    if (order === true) {
      var sortBySubject = students.sort(function (a, b) {
        return a.subject.localeCompare(b.subject);
      });
      renderStudents(sortBySubject);
      order = false;
    } else if (order === false) {
      var sortBySubject = students.sort(function (a, b) {
        return b.subject.localeCompare(a.subject);
      });
      renderStudents(sortBySubject);
      order = true;
    }

    ;
  });
  sortStatus.addEventListener('click', function () {
    if (order === true) {
      var sortByStatus = students.sort(function (a, b) {
        return a.status.localeCompare(b.status);
      });
      renderStudents(sortByStatus);
      order = false;
    } else if (order === false) {
      var sortByStatus = students.sort(function (a, b) {
        return b.status.localeCompare(a.status);
      });
      renderStudents(sortByStatus);
      order = true;
    }

    ;
  });
} catch (error) {
  console.error(error);
}

; //Function to compare dates

var compareDate = function compareDate(firstDate, secondDate) {
  try {
    var date1 = new Date(firstDate.date).getTime();
    var date2 = new Date(secondDate.date).getTime();
    return date1 > date2 ? 1 : -1;
  } catch (error) {
    console.error(error);
  }

  ;
}; //Function to compare dates in the oposite way


var compareDateOposite = function compareDateOposite(firstDate, secondDate) {
  try {
    var date1 = new Date(firstDate.date).getTime();
    var date2 = new Date(secondDate.date).getTime();
    return date1 < date2 ? 1 : -1;
  } catch (error) {
    console.error(error);
  }

  ;
};

var selectedFile;
document.getElementById('input').addEventListener("change", function (event) {
  selectedFile = event.target.files[0];
});
var data = [{
  "name": "jayanth",
  "data": "scd",
  "abc": "sdef"
}];
document.getElementById('button').addEventListener("click", function () {
  XLSX.utils.json_to_sheet(data, 'out.xlsx');

  if (selectedFile) {
    var fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);

    fileReader.onload = function (event) {
      var data = event.target.result;
      var workbook = XLSX.read(data, {
        type: "binary"
      });
      workbook.SheetNames.forEach(function (sheet) {
        var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
        var newList = JSON.stringify(rowObject, undefined, 4);
        console.log(newList);
      });
    };
  }
});