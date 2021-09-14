"use strict";

function handleTask(ev) {
  ev.preventDefault();

  try {
    var _ev$target$elements = ev.target.elements,
        task = _ev$target$elements.task,
        itemID = _ev$target$elements.itemID,
        status = _ev$target$elements.status;
    task = task.value;
    itemID = itemID.valueAsNumber;
    status = "incomplete";
    axios.put('/addListItem', {
      task: task,
      itemID: itemID,
      status: status
    }).then(function (_ref) {
      var data = _ref.data;
      console.log(data);
    });
    alert("Submitted Succesfuly!");
    ev.target.reset();
  } catch (e) {
    console.error(e);
  }
}

var firstForm = document.querySelector(".firstForm");
firstForm.addEventListener("submit", handleTask);

function handleSearchQuery(event) {
  try {
    event.preventDefault();
    var list = document.querySelector(".holder");
    var searchQuery = event.target.children.searchQuery.valueAsNumber;
    axios.get("/getListQuery?id=".concat(searchQuery)).then(function (_ref2) {
      var data = _ref2.data;
      console.log(data);
    });
    event.target.reset();
    axios.get('/getListItem').then(function (res) {
      return list.innerHTML = res.data.html;
    });
  } catch (e) {
    console.error(e);
  }
}

var secondForm = document.querySelector(".secondForm");
secondForm.addEventListener("submit", handleSearchQuery);