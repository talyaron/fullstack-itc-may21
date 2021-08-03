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
    return new Promise(function (resolve, reject) {
      axios.post('/addListItem', {
        task: task
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

function renderArrayToDom(listArray) {
  try {
    var list = document.querySelector(".holder");
    var html = '';
    listArray.forEach(function (listItem) {
      if (listItem.status === "Incomplete") {
        html += "<div class=\"holder__item\" id='".concat(listItem.itemID, "'>\n                <div class=\"holder__item__header\">Task:</div>\n                <div class=\"holder__item__taskDisplay\" style=\"color: red\">").concat(listItem.item, "</div>\n                <input class=\"holder__item__task\" id=\"").concat(listItem.itemID, "update\" placeholder=\"Edit Task, Click Update!\"  value=\"\">\n                <div class='button button--update' onclick='updateTask(\"").concat(listItem.itemID, "\")'>UPDATE</div>\n                <div class=\"holder__item__header\">Status:</div>\n                <div class=\"holder__item__status\" id=\"").concat(listItem.itemID, "status\">").concat(listItem.status, "</div>\n                <div class='button button--update-status' id=\"").concat(listItem.itemID, "status-button\" onclick='updateStatus(\"").concat(listItem.itemID, "\")'>Mark as Complete!</div>\n                <div class=\"button button--delete\" onclick='deleteTask(\"").concat(listItem.itemID, "\")'>DELETE</div>\n                </div>");
      } else {
        html += "<div class=\"holder__item\" id='".concat(listItem.itemID, "'>\n                    <div class=\"holder__item__header\">Task:</div>\n                    <div class=\"holder__item__taskDisplay\" style=\"color: green\">").concat(listItem.item, "</div>\n                    <div class=\"holder__item__header\">Status:</div>\n                    <div class=\"green\" id=\"").concat(listItem.itemID, "status\">").concat(listItem.status, "</div>\n                    <div class=\"button button--delete\" onclick='deleteTask(\"").concat(listItem.itemID, "\")'>DELETE</div>\n                    </div>");
      }
    });
    list.innerHTML = html;
  } catch (e) {
    console.error(e);
  }
}