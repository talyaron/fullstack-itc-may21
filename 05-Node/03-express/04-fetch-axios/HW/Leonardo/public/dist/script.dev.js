"use strict";

var showStudents = document.querySelector("#showStudents");
var handleForm = document.querySelector(".form");
var informationParams = document.querySelector("#informationParams");
var informationQuerys = document.querySelector("#informationQuerys");
var searchId = document.querySelector("#searchId"); //To handle the form to add a new Student:

handleForm.addEventListener("submit", handleSubmit);

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

    axios.post("/addStudent", {
      firstname: firstname,
      lastname: lastname,
      age: age,
      averageGrade: averageGrade
    });
  } catch (e) {
    console.error();
  }
} //////////////////////////////////////////////////////
//To handle the "show all the students" button. CREATING A NEW PROMISE:


showStudents.addEventListener("click", getInfo);

function getInfo() {
  var getStudents;
  return regeneratorRuntime.async(function getInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(getAllStudents());

        case 3:
          getStudents = _context.sent;
          render(getStudents);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function getAllStudents() {
  return new Promise(function (resolve, reject) {
    //YS: I know you learned this in class but it is not necessary to make a promisem, you can just use async/await with axios (like you did in the params/query fetches)
    axios.get("/getStudents").then(function (_ref) {
      var data = _ref.data;
      resolve(data);
    })["catch"](function (e) {
      reject(e);
    });
  });
} //////////////////////////////////////////////////////
//To handle the button "by params" and show the information of the student. DOING ASYNC-AWAIT:


informationParams.addEventListener("click", getStudentParam);

function getStudentParam() {
  var studentInfoParam;
  return regeneratorRuntime.async(function getStudentParam$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (searchId.value) {
            _context2.next = 4;
            break;
          }

          alert("Please enter an ID");
          _context2.next = 8;
          break;

        case 4:
          _context2.next = 6;
          return regeneratorRuntime.awrap(axios.get("/showStudentParam/".concat(searchId.value)));

        case 6:
          studentInfoParam = _context2.sent;
          studentInfoParam.data[0] === null ? alert("Please enter a valid ID") : render(studentInfoParam.data); //YS: Instead of having this, you should have a try catch. try { axios.get()....} catch {e}

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
} //To handle the button "by querys" and show the information of the student. DOING ASYNC-AWAIT:


informationQuerys.addEventListener("click", getStudentQuery);

function getStudentQuery() {
  var studentInfoQuery;
  return regeneratorRuntime.async(function getStudentQuery$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (searchId.value) {
            _context3.next = 4;
            break;
          }

          alert("Please enter an ID");
          _context3.next = 8;
          break;

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(axios.get("/showStudentQuery?id=".concat(searchId.value)));

        case 6:
          studentInfoQuery = _context3.sent;
          //YS: Try / Catch with Async/Await
          studentInfoQuery.data[0] === null ? alert("Please enter a valid ID") : render(studentInfoQuery.data);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
} //////////////////////////////////////////////////////
//To delete a Student


function removeStudent(studentId, name) {
  var option, DataWithOutDelete;
  return regeneratorRuntime.async(function removeStudent$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          //YS: Yes, this is how your FE fetches should look!
          option = confirm("Are you sure do you want to delete ".concat(name, "?"));

          if (!option) {
            _context4.next = 7;
            break;
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/deleteStudent/".concat(studentId)));

        case 5:
          DataWithOutDelete = _context4.sent;
          render(DataWithOutDelete.data);

        case 7:
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
} //////////////////////////////////////////////////////
//Function to render the user/s in the DOM


function render(data) {
  try {
    var table = document.querySelector(".table");
    if (!table) throw new Error("There is a problem finding table from HTML");
    var html = data.map(function (element) {
      return "\n            <tr>\n            <td id=".concat(element.id, ">").concat(element.id, "\n            <button id=\"Element").concat(element.id, "\" onclick='copyTextFromElement(\"").concat(element.id, "\")'>Copy</button></td>\n            <td>").concat(element.firstname, "</td>\n            <td>").concat(element.lastname, "</td> \n            <td>").concat(element.age, "</td> \n            <td>").concat(element.averageGrade, "</td> \n            <td><i class=\"fas fa-trash table__remove\" onclick='removeStudent(\"").concat(element.id, "\", \"").concat(element.firstname, "\")' title=\"Remove\"></i></td> \n            </tr>");
    }).join("");
    table.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
} //////////////////////////////////////////////////////
//Function to sort the table in the DOM (I could do this directly in the client side, but I prefer to do it in the server so I can practice and if you refresh the page the data is going to be still there):


try {
  var sortName = document.querySelector("#tblData__titles--firstname");
  if (!sortName) throw new Error("There is a problem sorting the name");
  var sortLast = document.querySelector("#tblData__titles--lastname");
  if (!sortLast) throw new Error("There is a problem sorting the lastname");
  var sortAge = document.querySelector("#tblData__titles--age");
  if (!sortAge) throw new Error("There is a problem sorting the age");
  var sortAverage = document.querySelector("#tblData__titles--average");
  if (!sortAverage) throw new Error("There is a problem sorting the average");
  sortName.addEventListener("click", function () {
    sortTable("firstname");
  }); //YS: You should take a look at event bubbling and capturing to be able to use only one event listener for all of this.

  sortLast.addEventListener("click", function () {
    sortTable("lastname");
  });
  sortAge.addEventListener("click", function () {
    sortTable("age");
  });
  sortAverage.addEventListener("click", function () {
    sortTable("average");
  });
} catch (error) {
  console.error(error);
}

function sortTable(orderBy) {
  var getStudentsSorted;
  return regeneratorRuntime.async(function sortTable$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(getAllStudentsSorted(orderBy));

        case 3:
          getStudentsSorted = _context5.sent;
          //YS: You can just axios fetch here too instead of using a promise.
          render(getStudentsSorted);
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function getAllStudentsSorted(orderBy) {
  try {
    return new Promise(function (resolve, reject) {
      axios.get("/sortTable/".concat(orderBy)).then(function (_ref2) {
        var data = _ref2.data;
        resolve(data);
      })["catch"](function (e) {
        reject(e);
      });
    });
  } catch (error) {
    console.error(error);
  }
} ////////////////////////////////////////////////////
//Function to copy the ID


function copyTextFromElement(elementID) {
  //YS: Nice!
  try {
    //Select the element
    var element = document.getElementById(elementID); //Get the text content from the element

    var elementText = element.textContent;
    var textWantToCopy = elementText.split(" "); //Copy the text to the clipboard

    var successful = navigator.clipboard.writeText(textWantToCopy[0]);
    var buttonCopy = document.querySelector("#Element".concat(elementID));
    if (successful) buttonCopy.innerHTML = "Copied!";else buttonCopy.innerHTML = "Unable to copy!";
  } catch (error) {
    console.error(error);
  }
}