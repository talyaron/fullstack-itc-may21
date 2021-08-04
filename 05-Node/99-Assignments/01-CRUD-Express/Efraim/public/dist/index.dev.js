"use strict";

window.addEventListener('load', function () {
  try {
    return new Promise(function (resolve, reject) {
      axios.get('/getList').then(function (data) {
        resolve(data.data.list);
        renderArrayToDom(data.data.list);
      })["catch"](function (e) {
        reject(e);
      });
    });
  } catch (e) {
    console.error(e);
  }
});

function handleTask(ev) {
  ev.preventDefault();

  try {
    var task = ev.target.elements.task.value;
    var dueDate = ev.target.elements.dueDate.value;
    return new Promise(function (resolve, reject) {
      axios.post('/addListItem', {
        task: task,
        dueDate: dueDate
      }).then(function (data) {
        resolve(data.data.list);
        renderArrayToDom(data.data.list);
        alert("Submitted Succesfuly!");
      })["catch"](function (e) {
        reject(e);
      });
      ev.target.reset();
    });
  } catch (e) {
    console.error(e);
  }
}

var form = document.querySelector("form");
form.addEventListener("submit", handleTask);

function deleteTask(taskID) {
  try {
    return new Promise(function (resolve, reject) {
      axios["delete"]("/deleteTask/".concat(taskID)).then(function (data) {
        resolve(data.data.list);
        renderArrayToDom(data.data.list);
      })["catch"](function (e) {
        reject(e);
      });
    });
  } catch (e) {
    console.error(e);
  }
}

function updateTask(taskID) {
  try {
    var newTaskName = document.getElementById("".concat(taskID, "update")).value;
    return new Promise(function (resolve, reject) {
      axios.put('/updateTask', {
        id: taskID,
        newTaskName: newTaskName
      }).then(function (data) {
        resolve(data.data.list.list);
        renderArrayToDom(data.data.list.list);
        alert("updated succefully!");
      })["catch"](function (e) {
        reject(e);
      });
    });
  } catch (e) {
    console.error(e);
  }
}

function updateStatus(ID) {
  try {
    return new Promise(function (resolve, reject) {
      axios.put('/updateStatus', {
        id: ID
      }).then(function (data) {
        resolve(data.data.list.list);
        renderArrayToDom(data.data.list.list);
      })["catch"](function (e) {
        reject(e);
      });
    });
  } catch (e) {
    console.error(e);
  }
}

function dateUrgency(date) {
  if ((new Date(date) - new Date()) / 1000 < 86400) {
    return "red";
  } else if ((new Date(date) - new Date()) / 1000 < 259200) {
    return "rgb(220, 220, 2)";
  } else {
    return "blue";
  }
}

function renderArrayToDom(listArray) {
  var list, html;
  return regeneratorRuntime.async(function renderArrayToDom$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          list = document.querySelector(".holder");
          html = '';
          _context.next = 5;
          return regeneratorRuntime.awrap(listArray.sort(function (a, b) {
            console.log(new Date() - new Date(a.dueDate));
            return new Date(a.dueDate) - new Date(b.dueDate);
          }));

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(listArray.forEach(function (listItem) {
            if (listItem.status === "Incomplete") {
              var urgencyColor = dateUrgency(listItem.dueDate);
              html += "<div class=\"holder__item\" id='".concat(listItem.itemID, "'>\n                <div class=\"holder__item__header\">Task:</div>\n                <div class=\"holder__item__taskDisplay\">").concat(listItem.item, "</div>\n                <input class=\"holder__item__task\" id=\"").concat(listItem.itemID, "update\" placeholder=\"Edit Task, Click Update!\"  value=\"\">\n                <div class='button button--update' onclick='updateTask(\"").concat(listItem.itemID, "\")'>UPDATE</div>\n                <div class=\"holder__item__header\">Due Date:</div>\n                <div class=\"holder__item__dueDate\" style=\"color: ").concat(urgencyColor, "\">").concat(listItem.dueDate, "</div>\n                <div class=\"holder__item__header\">Status:</div>\n                <div class=\"holder__item__status\" id=\"").concat(listItem.itemID, "status\">").concat(listItem.status, "</div>\n                <div class='button button--update-status' id=\"").concat(listItem.itemID, "status-button\" onclick='updateStatus(\"").concat(listItem.itemID, "\")'>Mark as Complete!</div>\n                <div class=\"button button--delete\" onclick='deleteTask(\"").concat(listItem.itemID, "\")'>DELETE</div>\n                </div>");
            } else {
              html += "<div class=\"holder__item\" id='".concat(listItem.itemID, "'>\n                    <div class=\"holder__item__header\">Task:</div>\n                    <div class=\"holder__item__taskDisplay\" style=\"color: green\">").concat(listItem.item, "</div>\n                    <div class=\"holder__item__header\">Due Date:</div>\n                    <div class=\"holder__item__dueDate\" style=\"color: green\">").concat(listItem.dueDate, "</div>\n                    <div class=\"holder__item__header\">Status:</div>\n                    <div class=\"green\" id=\"").concat(listItem.itemID, "status\">").concat(listItem.status, "</div>\n                    <div class=\"button button--delete\" onclick='deleteTask(\"").concat(listItem.itemID, "\")'>DELETE</div>\n                    </div>");
            }
          }));

        case 7:
          list.innerHTML = html;
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}