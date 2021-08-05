"use strict";

function addTaskPromise(newTask) {
  return new Promise(function (resolve, reject) {
    fetch('/addTask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    }).then(function (res) {
      if (res.status === 200 && res.ok) {
        return res.json().then(function (task) {
          resolve(task);
        });
      } else {
        return res.json().then(function (task) {
          alert(task.error);
        });
      }
    });
  });
}

function getTaskPromise(id) {
  return new Promise(function (resolve, reject) {
    fetch("/getTask/".concat(id)).then(function (r) {
      return r.json();
    }).then(function (task) {
      resolve(task);
    })["catch"](function (e) {
      reject(e);
    });
  });
}

function getDoneTaskPromise(id) {
  return new Promise(function (resolve, reject) {
    fetch("/doneTask/".concat(id), {
      method: 'PUT'
    }).then(function (r) {
      return r.json();
    }).then(function (task) {
      resolve(task);
    })["catch"](function (e) {
      reject(e);
    });
  });
}

function updateTaskPromise(id, updateTask) {
  return new Promise(function (resolve, reject) {
    fetch("/updateTask/".concat(id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    }).then(function (res) {
      if (res.status === 200 && res.ok) {
        return res.json().then(function (task) {
          resolve(task);
        });
      } else {
        return res.json().then(function (task) {
          alert(task.error);
        });
      }
    })["catch"](function (e) {
      reject(e);
    });
  });
}

function searchPriortyPromise(status) {
  return new Promise(function (resolve, reject) {
    fetch("/getPriority/".concat(status)).then(function (r) {
      return r.json();
    }).then(function (task) {
      resolve(task);
    })["catch"](function (e) {
      reject(e);
    });
  });
}