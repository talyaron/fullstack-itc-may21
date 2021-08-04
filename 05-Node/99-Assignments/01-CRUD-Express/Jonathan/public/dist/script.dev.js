"use strict";

//section
var btnTask = document.querySelector('.section--btn--all');
var btnModal = document.querySelector('.section--btn--add'); //

var bgModal = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
var addTask = document.querySelector('.add');
var editTask = document.querySelector('.edit');
var btnColor = document.querySelector('.header__right--color--paint');
var inputSearch = document.querySelector('#filterstatus'); //addEventListner

btnModal.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
addTask.addEventListener('click', handleSumbit);
btnTask.addEventListener('click', getAllTask);
editTask.addEventListener('click', updateTaskOnDOM);
btnColor.addEventListener('click', setColor);
inputSearch.addEventListener('change', searchPriorty); //id

var idTask;

function setColor() {
  var inputColor = document.querySelector('#color').value;
  var boardData = document.querySelector('#boardData');
  var editIcon = document.querySelectorAll('.edit');

  if (tinycolor("".concat(inputColor)).isDark()) {
    boardData.style.backgroundColor = inputColor;
    boardData.style.color = 'white';

    for (var i = 0; i < editIcon.length; i++) {
      editIcon[i].style.color = 'yellow';
    }
  } else {
    boardData.style.backgroundColor = inputColor;
    boardData.style.color = 'black';

    for (var _i = 0; _i < editIcon.length; _i++) {
      editIcon[_i].style.color = 'rgb(244,202,22) ';
    }
  }
} //filterTask


function searchPriorty(ev) {
  var _inputSearch, allTask;

  return regeneratorRuntime.async(function searchPriorty$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          ev.preventDefault();
          _inputSearch = document.querySelector('#filterstatus').value;
          _context.next = 5;
          return regeneratorRuntime.awrap(searchPriortyPromise(_inputSearch));

        case 5:
          allTask = _context.sent;

          if (!(allTask.length === 0)) {
            _context.next = 8;
            break;
          }

          throw new Error("No task ".concat(_inputSearch, "  on the database"));

        case 8:
          renderTask(allTask);
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          alert(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

function openModal(ev) {
  try {
    ev.preventDefault();
    addTask.disabled = false;
    editTask.disabled = true;
    addTask.style.cursor = 'pointer';
    editTask.style.cursor = 'not-allowed';
    bgModal.classList.add('bg-active');
  } catch (er) {
    console.error(er);
  }
}

function closeModal() {
  bgModal.classList.remove('bg-active');
}

function handleSumbit(ev) {
  var newTask;
  return regeneratorRuntime.async(function handleSumbit$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          ev.preventDefault();
          newTask = getDataFromDOM();
          bgModal.classList.remove('bg-active');
          _context2.next = 6;
          return regeneratorRuntime.awrap(addTaskPromise(newTask));

        case 6:
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
} //getStudent


function getAllTask(ev) {
  var allTask;
  return regeneratorRuntime.async(function getAllTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          ev.preventDefault();
          _context3.next = 4;
          return regeneratorRuntime.awrap(getAllTaskPromise());

        case 4:
          allTask = _context3.sent;

          if (!(allTask.length === 0)) {
            _context3.next = 7;
            break;
          }

          throw new Error('No task on the database');

        case 7:
          renderTask(allTask);
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          alert(_context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

function deleteTask(id) {
  var task;
  return regeneratorRuntime.async(function deleteTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (!confirm("Do you want to delete this task?")) {
            _context4.next = 8;
            break;
          }

          alert('Delete task');
          _context4.next = 4;
          return regeneratorRuntime.awrap(deleteTaskPromise(id));

        case 4:
          task = _context4.sent;
          renderTask(task);
          _context4.next = 9;
          break;

        case 8:
          alert('Delete Cancelled!');

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function doneTask(id) {
  var allTask;
  return regeneratorRuntime.async(function doneTask$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(getDoneTaskPromise(id));

        case 3:
          allTask = _context5.sent;
          renderTask(allTask);
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          alert(_context5.t0);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function getTaskToUpdate(id) {
  var getTask, inputTitle, inputDescription;
  return regeneratorRuntime.async(function getTaskToUpdate$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          bgModal.classList.add('bg-active');
          addTask.disabled = true;
          editTask.disabled = false;
          addTask.style.backgroundColor = 'red';
          addTask.style.cursor = 'not-allowed';
          editTask.style.cursor = 'pointer';
          _context6.next = 9;
          return regeneratorRuntime.awrap(getTaskPromise(id));

        case 9:
          getTask = _context6.sent;
          inputTitle = document.querySelector("#title");
          inputDescription = document.querySelector("#description");
          inputTitle.value = getTask.title;
          inputDescription.value = getTask.description;
          idTask = id;
          _context6.next = 20;
          break;

        case 17:
          _context6.prev = 17;
          _context6.t0 = _context6["catch"](0);
          alert(_context6.t0);

        case 20:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 17]]);
}

function updateTaskOnDOM(ev) {
  var updateTask, updateTaskOnDom;
  return regeneratorRuntime.async(function updateTaskOnDOM$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          ev.preventDefault();
          updateTask = getDataFromDOM();
          _context7.next = 4;
          return regeneratorRuntime.awrap(updateTaskPromise(idTask, updateTask));

        case 4:
          updateTaskOnDom = _context7.sent;
          bgModal.classList.remove('bg-active');
          renderTask(updateTaskOnDom);

        case 7:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function getDataFromDOM() {
  var inputTitle = document.querySelector('#title').value;
  var inputDescription = document.querySelector('#description').value;
  var inputDateTime = document.querySelector('#datetime').value;
  var inputEmoji = document.querySelector('input[name="choice"]:checked').value;
  var inputStatus = document.querySelector('#status').value;
  var date = inputDateTime.substring(0, inputDateTime.indexOf('T'));
  var min = inputDateTime.substring(inputDateTime.indexOf('T') + 1, inputDateTime.length);
  var Task = {
    title: inputTitle,
    description: inputDescription,
    date: date,
    min: min,
    emoji: inputEmoji,
    status: inputStatus
  };
  return Task;
}

function renderTask(allTask) {
  try {
    var html = '';
    var boardDataRoot = document.querySelector('#boardData');
    if (!boardDataRoot) throw new Error("This page cant render");
    allTask.forEach(function (task) {
      //const { id, name, age, avgrade } = elem
      if (task.status === 'important') {
        html += "<div class = \"boardData--item boardData--red\">";
      } else if (task.status === 'later') {
        html += "<div class = \"boardData--item boardData--yellow\">";
      } else {
        html += "<div class = \"boardData--item boardData--green\">";
      }

      html += "<span>".concat(task.emoji, "</span>\n                    <table id=\"data\">\n                           <th>Title: </th>\n                           <td>").concat(task.title.charAt(0).toUpperCase() + task.title.slice(1), "</td>\n                        </tr>\n                        <tr>   \n                           <th>Description: </th>\n                           <td>").concat(task.description.charAt(0).toUpperCase() + task.description.slice(1), " </td>\n                        </tr>\n                        <tr>\n                           <th>Date: </th>\n                           <td>").concat(task.date, " </td>\n                         </tr>\n                         <tr>  \n                           <th>Time: </th>\n                           <td>").concat(task.min, " </td>\n                         </tr>\n                         <tr>\n                         <th>Priority: </th>\n                         <td>").concat(task.status.charAt(0).toUpperCase() + task.status.slice(1), "</td>\n                       </tr>\n                    </table>    \n                <div class=\"iconos\">\n                        <i class=\"fa fa-trash delete\" onclick='deleteTask(\"").concat(task.id, "\")' title=\"Delete Item\"></i>\n                        <i class=\"fas fa-edit edit\" onclick='getTaskToUpdate(\"").concat(task.id, "\")' title=\"Edit Task\"></i>");

      if (task.status !== 'done') {
        html += "<i class=\"fas fa-check-circle done\" onclick='doneTask(\"".concat(task.id, "\")' title=\"Done Task\"></i>");
      } else {//class iconoos mover a la derecha
      }

      html += "\n                    </div>  \n                  \n                </div>";
      title = "Click on the edit item and then edit";
    });
    boardDataRoot.innerHTML = html;
  } catch (e) {
    alert(e);
  }
} //<span> 👸</span>