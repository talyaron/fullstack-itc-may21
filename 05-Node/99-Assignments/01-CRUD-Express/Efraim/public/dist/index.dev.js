"use strict";

// For YS, I orginally used axios and the code was way shorter and cleaner.. 
// assignment said to use promises so I changed it all to fetch and resolve and reject and seems a lot bulkier now..
function getFullTaskList() {
  try {
    return new Promise(function (resolve, reject) {
      fetch('/getList').then(function (r) {
        return r.json();
      }).then(function (data) {
        resolve(data.list);
      })["catch"](function (e) {
        reject(e);
      });
    });
  } catch (e) {
    console.error(e);
  }
}

window.addEventListener('load', function _callee() {
  var list;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(getFullTaskList());

        case 3:
          list = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(renderArrayToDom(list));

        case 6:
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});

function handleTask(ev) {
  ev.preventDefault();

  try {
    var task = ev.target.elements.task.value;
    var dueDate = ev.target.elements.dueDate.value;
    return new Promise(function (resolve, reject) {
      fetch('/addListItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          task: task,
          dueDate: dueDate
        })
      }).then(function (r) {
        return r.json();
      }).then(function (data) {
        resolve(data.list);
        renderArrayToDom(data.list);
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
      fetch("/deleteTask/".concat(taskID), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (r) {
        return r.json();
      }).then(function (data) {
        resolve(data.list);
        renderArrayToDom(data.list);
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
    return new Promise(function _callee2(resolve, reject) {
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              fetch('/updateTask', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  id: taskID,
                  newTaskName: newTaskName
                })
              }).then(function (r) {
                return r.json();
              }).then(function (data) {
                resolve(data.list.list);
                renderArrayToDom(data.list.list);
              })["catch"](function (e) {
                reject(e);
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
  } catch (e) {
    console.error(e);
  }
}

function updateStatus(ID) {
  try {
    return new Promise(function (resolve, reject) {
      fetch('/updateStatus', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: ID
        })
      }).then(function (r) {
        return r.json();
      }).then(function (data) {
        resolve(data.list.list);
        renderArrayToDom(data.list.list);
      })["catch"](function (e) {
        reject(e);
      });
    });
  } catch (e) {
    console.error(e);
  }
}

function editTaskKeepText(id) {
  var edit, list, arrayElement;
  return regeneratorRuntime.async(function editTaskKeepText$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          edit = document.getElementById("".concat(id, "update"));
          _context3.next = 4;
          return regeneratorRuntime.awrap(getFullTaskList());

        case 4:
          list = _context3.sent;
          _context3.next = 7;
          return regeneratorRuntime.awrap(list.filter(function (find) {
            return find.itemID === id;
          }));

        case 7:
          arrayElement = _context3.sent;
          edit.placeholder = "";
          edit.value = arrayElement[0].item;
          _context3.next = 15;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function dateUrgency(date) {
  try {
    if ((new Date(date) - new Date()) / 1000 < 86400) {
      return "red";
    } else if ((new Date(date) - new Date()) / 1000 < 259200) {
      return "rgb(220, 220, 2)";
    } else {
      return "blue";
    }
  } catch (e) {
    console.error(e);
  }
}

function renderArrayToDom(listArray) {
  var list, html;
  return regeneratorRuntime.async(function renderArrayToDom$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          list = document.querySelector(".holder");
          html = '';
          _context4.next = 5;
          return regeneratorRuntime.awrap(listArray.sort(function (a, b) {
            return new Date(a.dueDate) - new Date(b.dueDate);
          }));

        case 5:
          _context4.next = 7;
          return regeneratorRuntime.awrap(listArray.forEach(function (listItem) {
            if (listItem.status === "Incomplete") {
              var urgencyColor = dateUrgency(listItem.dueDate);
              html += "<div class=\"holder__item\" id='".concat(listItem.itemID, "'>\n                <div class=\"holder__item__header\">Task:</div>\n                <div class=\"holder__item__taskDisplay\">").concat(listItem.item, "</div>\n                <input class=\"holder__item__task\" id=\"").concat(listItem.itemID, "update\" placeholder=\"Edit Task, Click Update!\"  value=\"\" onclick='editTaskKeepText(\"").concat(listItem.itemID, "\")'>\n                <div class='button button--update' onclick='updateTask(\"").concat(listItem.itemID, "\")'>UPDATE</div>\n                <div class=\"holder__item__header\">Due Date:</div>\n                <div class=\"holder__item__dueDate\" style=\"color: ").concat(urgencyColor, "\">").concat(listItem.dueDate, "</div>\n                <div class=\"holder__item__header\">Status:</div>\n                <div class=\"holder__item__status\" id=\"").concat(listItem.itemID, "status\">").concat(listItem.status, "</div>\n                <div class='button button--update-status' id=\"").concat(listItem.itemID, "status-button\" onclick='updateStatus(\"").concat(listItem.itemID, "\")'>Mark as Complete!</div>\n                <div class=\"button button--delete\" onclick='deleteTask(\"").concat(listItem.itemID, "\")'>DELETE</div>\n                </div>");
            } else {
              html += "<div class=\"holder__item\" id='".concat(listItem.itemID, "'>\n                    <div class=\"holder__item__header\">Task:</div>\n                    <div class=\"holder__item__taskDisplay\" style=\"color: green\">").concat(listItem.item, "</div>\n                    <div class=\"holder__item__header\">Due Date:</div>\n                    <div class=\"holder__item__dueDate\" style=\"color: green\">").concat(listItem.dueDate, "</div>\n                    <div class=\"holder__item__header\">Status:</div>\n                    <div class=\"green\" id=\"").concat(listItem.itemID, "status\">").concat(listItem.status, "</div>\n                    <div class=\"button button--delete\" onclick='deleteTask(\"").concat(listItem.itemID, "\")'>DELETE</div>\n                    </div>");
            }
          }));

        case 7:
          list.innerHTML = html;
          _context4.next = 13;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
}