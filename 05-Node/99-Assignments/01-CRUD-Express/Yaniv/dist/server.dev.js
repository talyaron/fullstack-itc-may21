"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var express = require('express');

var fs = require('fs');

var _require = require('uuid'),
    uuidv4 = _require.v4;

app = express();
var port = process.env.PORT || 5555;
app.use(express.json());
app.use(express["static"]('public'));

var readJson = function readJson() {
  try {
    var _toDos = fs.readFileSync('todos.json');

    return JSON.parse(_toDos);
  } catch (error) {
    console.error(error);
  }
};

var ToDos =
/*#__PURE__*/
function () {
  function ToDos() {
    _classCallCheck(this, ToDos);

    this.toDoList = readJson();
  }

  _createClass(ToDos, [{
    key: "updateToDosJson",
    value: function updateToDosJson() {
      try {
        fs.writeFileSync('todos.json', JSON.stringify(this.toDoList));
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "addToDo",
    value: function addToDo(toDo) {
      try {
        toDo.uuid = uuidv4();
        toDo.createdDate = new Date();
        toDo.editedDate = null;
        this.toDoList.push(toDo);
        this.updateToDosJson();
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "searchToDos",
    value: function searchToDos(toDoContent, toDoStatus) {
      try {
        var searchedToDos = this.toDoList;
        var toDoContentRegEx = new RegExp(toDoContent, 'gmi');

        if (toDoContent === '' && toDoStatus == '') {
          return searchedToDos;
        }

        if (toDoContent !== '') {
          searchedToDos = this.toDoList.filter(function (toDo) {
            return toDoContentRegEx.test(toDo.content);
          });
        }

        if (toDoStatus !== '') {
          searchedToDos = this.toDoList.filter(function (toDo) {
            return toDo.status === toDoStatus;
          });
        }

        return searchedToDos;
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "updateToDo",
    value: function updateToDo(toDoUuid, toDo) {
      try {
        var toDoToUpdateIndex = this.toDoList.findIndex(function (toDoItem) {
          return toDoItem.uuid === toDoUuid;
        });
        if (toDoToUpdateIndex === -1) return [];
        var isEdited = false;

        if (toDo.content !== '' && toDo.content !== this.toDoList[toDoToUpdateIndex].content) {
          this.toDoList[toDoToUpdateIndex].content = toDo.content;
          isEdited = true;
        }

        if (toDo.status !== '' && toDo.status !== this.toDoList[toDoToUpdateIndex].status) {
          this.toDoList[toDoToUpdateIndex].status = toDo.status;
          isEdited = true;
        }

        if (toDo.dueDate !== '' && toDo.dueDate !== this.toDoList[toDoToUpdateIndex].dueDate) {
          this.toDoList[toDoToUpdateIndex].dueDate = toDo.dueDate;
          isEdited = true;
        }

        if (isEdited) this.toDoList[toDoToUpdateIndex].editedDate = new Date();
        this.updateToDosJson();
        return [this.toDoList[toDoToUpdateIndex]];
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "deleteToDo",
    value: function deleteToDo(toDoUuid) {
      try {
        var toDoToUpdateIndex = this.toDoList.findIndex(function (toDo) {
          return toDo.uuid === toDoUuid;
        });
        if (toDoToUpdateIndex === -1) return [];
        var deletedToDo = this.toDoList.filter(function (toDo) {
          return toDo.uuid === toDoUuid;
        });
        this.toDoList = this.toDoList.filter(function (toDo) {
          return toDo.uuid !== toDoUuid;
        });
        this.updateToDosJson();
        return deletedToDo;
      } catch (error) {
        console.error(error);
      }
    }
  }]);

  return ToDos;
}();

var toDos = new ToDos();
app.get('/todo-list', function (req, res) {
  try {
    var resToSent = toDos.toDoList.length === 0 ? "Your to-do list is empty. Go do something you love \uD83E\uDD29" : toDos.toDoList;
    res.send(resToSent);
  } catch (error) {
    console.error(error);
    res.status(400).send({
      error: er.message
    });
  }
});
app.post('/post-todo', function (req, res) {
  try {
    var body = req.body;
    toDos.addToDo(body);
    console.log("".concat(body.content, " added to to-do list!"));
    res.send(toDos);
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
});
app.get('/todo', function (req, res) {
  try {
    var _req$query = req.query,
        content = _req$query.content,
        status = _req$query.status;
    var searchedToDos = toDos.searchToDos(content, status);
    var resToSent = searchedToDos.length === 0 ? "No to-dos found \uD83D\uDC41\u200D\uD83D\uDDE8" : searchedToDos;
    var terminalMsg = searchedToDos.length === 0 ? "No to-dos found" : "".concat(searchedToDos.length, " to-dos found!");
    console.log(terminalMsg);
    res.send(resToSent);
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
});
app.put('/todo/:uuid', function (req, res) {
  // can update content, status or dueDate.
  try {
    var body = req.body;
    var uuid = req.params.uuid;
    var updatedToDo = toDos.updateToDo(uuid, body);
    if (updatedToDo.length === 0) throw new Error("To-do ".concat(uuid, " not found"));
    console.log("To-do ".concat(uuid, " updated successfully!"));
    res.send(toDos);
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
});
app["delete"]('/todo/:uuid', function (req, res) {
  try {
    var uuid = req.params.uuid;
    var deletedToDo = toDos.deleteToDo(uuid);
    if (deletedToDo.length === 0) throw new Error("To-do ".concat(uuid, " not found"));
    console.log("To-do ".concat(uuid, " deleted successfully!"));
    res.send(toDos);
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
});
app.listen(port, function () {
  console.log("listening on port ".concat(port, "..."));
});