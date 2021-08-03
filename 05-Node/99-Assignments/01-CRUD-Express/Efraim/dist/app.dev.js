"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

app = express();
var port = process.env.PORT || 5000;
app.use(express.json());

var Ajv = require("ajv");

var ajv = new Ajv();
app.use(express["static"]('public'));

var toDOItems = function toDOItems(item, status) {
  _classCallCheck(this, toDOItems);

  this.item = item;
  this.itemID = Math.random().toString(16).slice(2);
  this.status = status;
};

var toDoList =
/*#__PURE__*/
function () {
  function toDoList() {
    _classCallCheck(this, toDoList);

    this.list = [];
  }

  _createClass(toDoList, [{
    key: "addListItem",
    value: function addListItem(list) {
      try {
        this.list.push(list);
        console.log(list);
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "findListItemWithID",
    value: function findListItemWithID(listItemID) {
      try {
        var searchedList = this.list.filter(function (list) {
          return list.itemID === parseInt(listItemID);
        });
        html = "<div class=\"holder__student\" id=\"".concat(searchedList[0].itemID, "\">\n                <div class=\"holder__student__id\">Student ID: ").concat(searchedList[0].itemID, "</div>\n                <div class=\"holder__student__item\">Student item: ").concat(searchedList[0].item, "</div>\n                <div class=\"holder__student__age\"> Student Age: ").concat(searchedList[0].age, "</div>\n                <div class=\"holder__student__status\"> Average Grade: ").concat(searchedList[0].status, "%</div>\n                </div>");
        return html;
      } catch (e) {
        console.error(e);
      }
    }
  }]);

  return toDoList;
}();

var list = new toDoList();
var html = '';
app.post('/addListItem', function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        task: {
          type: "string"
        },
        status: {
          type: "string"
        }
      },
      required: ["task", "status"],
      additionalProperties: false
    };
    var validate = ajv.compile(schema);
    var body = req.body;
    var valid = validate(body);

    if (!valid) {
      validate.errors.forEach(function (err) {
        return console.log(err.message);
      });
      throw new Error("Invalid data was transferd");
    }

    list.addListItem(new toDOItems(body.task, body.status));
    res.send(list);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
});
app["delete"]('/deleteStudent/:ID', function (req, res) {
  var ID = req.params.ID;
  console.log(ID);
  list.list = list.list.filter(function (list) {
    return list.itemID !== ID;
  });
  res.send(list);
});
app.put('/updateStudent', function (req, res) {
  var _req$body = req.body,
      id = _req$body.id,
      newTaskName = _req$body.newTaskName;
  var listIndex = list.list.findIndex(function (list) {
    return list.itemID === id;
  });

  if (listIndex > -1) {
    list.list[listIndex].item = newTaskName;
    res.send({
      message: 'one list Item was updated',
      list: list
    });
  } else {
    res.send({
      message: 'couldnt find the task Item!',
      list: list
    });
  }
});
app.put('/updateStatus', function (req, res) {
  var id = req.body.id;
  var listIndex = list.list.findIndex(function (list) {
    return list.itemID === id;
  });

  if (listIndex > -1) {
    list.list[listIndex].status = "completed!";
    res.send({
      message: 'one list task status was updated',
      list: list
    });
  } else {
    res.send({
      message: 'couldnt find the task Item!',
      list: list
    });
  }
});
app.get('/getListQuery', function (req, res) {
  try {
    var searchedID = req.query.id;

    var _list = _list.findListItemWithID(searchedID);

    res.send(_list);
  } catch (e) {
    console.error(e);
  }
});
app.get('/getList', function (req, res) {
  try {
    res.send(list);
  } catch (e) {
    console.error(e);
  }
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});