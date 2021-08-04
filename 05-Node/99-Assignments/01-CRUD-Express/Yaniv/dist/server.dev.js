"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        this.toDoList(_objectSpread({}, toDo, {
          uuid: uuidv4(),
          dateCreated: new Date()
        }));
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "searchToDos",
    value: function searchToDos(toDoContent, toDoStatus) {
      try {
        var searchedToDos = this.toDoList;
        if (toDoContent !== '') this.toDoList.findIndex(function (toDo) {
          return toDo.content === toDoContent;
        });
        if (toDoStatus !== '') this.toDoList.findIndex(function (toDo) {
          return toDo.content === toDoStatus;
        });
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
        if (toDo.content !== '') this.toDoList.findIndex(function (toDoItem) {
          return toDoItem.content === toDo.content;
        });
        if (toDo.status !== '') this.toDoList.findIndex(function (toDoItem) {
          return toDoItem.content === toDo.status;
        });
        if (toDo.dueDate !== '') this.toDoList.findIndex(function (toDoItem) {
          return toDoItem.uuid === toDo.dueDate;
        });
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
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
});
app.post('/post-todo', function (req, res) {
  try {
    var body = req.body;
    toDos.addToDo(body);
    console.log("".concat(body.name, " added to to-do list!"));
    res.send(toDos);
  } catch (er) {
    console.error(er);
    res.status(400).send({
      error: er.message
    });
  }
});
app.get('/todo?content=:content&status=:status', function (req, res) {
  // can search by content or status.
  try {
    var _req$query = req.query,
        content = _req$query.content,
        status = _req$query.status;
    var searchedToDos = toDos.searchToDos(content, status);
    var resToSent = searchedToDos.length === 0 ? "No to-dos found" : searchedToDos;
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