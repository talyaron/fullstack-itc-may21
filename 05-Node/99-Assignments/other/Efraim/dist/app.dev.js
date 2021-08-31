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

var toDOItems = function toDOItems(item, itemID, status) {
  _classCallCheck(this, toDOItems);

  this.item = item;
  this.itemID = itemID;
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
      } catch (e) {
        console.error(e);
      }
    }
  }, {
    key: "renderArrayToDom",
    value: function renderArrayToDom(listArray) {
      try {
        var _html = '';
        listArray.forEach(function (listItem) {
          _html += "<div class=\"holder__item\" id=\"".concat(listItem.itemId, "\">") + "<div class=\"holder__item__task\">".concat(listItem.item, "</div>") + "<div class=\"holder__item__ID\">".concat(listItem.itemID, "</div>") + "<div class=\"holder__item__status\">".concat(status, "</div>") + "<div class=\"holder__item__delete\" onclick=\"deleteitem('".concat(listItem.itemId, "')\">x</div>") + "</div>";
        });
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
app.put('/addListItem', function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        item: {
          type: "string"
        },
        itemID: {
          type: "integer"
        },
        status: {
          type: "string"
        }
      },
      required: ["item", "itemID", "status"],
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

    list.addListItem(new toDOItems(body.item, body.itemID, body.status));
    list.renderArrayToDom(list);
    res.send(list);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
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
app.get('/getListItem', function (req, res) {
  try {
    res.send({
      html: html
    });
  } catch (e) {
    console.error(e);
  }
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});