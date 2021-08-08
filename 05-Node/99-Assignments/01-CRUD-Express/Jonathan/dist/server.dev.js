"use strict";

var express = require("express");

var app = express();
var port = process.env.port || 3000;

var fs = require("fs");

var _require = require("uuid"),
    uuidv4 = _require.v4;

app.use(express["static"]("public"));
app.use(express.json());

var readAllTasks = function readAllTasks() {
  var allTasks = fs.readFileSync("./task.json");
  return JSON.parse(allTasks);
};

function getOrderTask(allTasks) {
  //YS: You should change the text of your button to Order Tasks by Date or something because the user doesnt know what they are ordering by. 
  allTasks.sort(function (a, b) {
    return a.datetime < b.datetime ? -1 : a.datetime > b.datetime ? 1 : 0;
  });
  return allTasks;
}

app.post("/addTask", function (req, res) {
  try {
    var _req$body = req.body,
        title = _req$body.title,
        description = _req$body.description,
        date = _req$body.date,
        min = _req$body.min,
        emoji = _req$body.emoji,
        status = _req$body.status,
        datetime = _req$body.datetime;
    var newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      date: date,
      min: min,
      emoji: emoji,
      status: status,
      datetime: datetime
    };
    /*  
        2 things with this newTask object: 
        1) Whenever your keys and values are the same, you dont have to write it twice: 
        const newTask = {   
            id: uuidv4(),
            title,
            description,
            date,
            min,
            emoji,
            status,
            datetime,
        };
          2) Another thing you can do is spread your req.body object and add the ID: 
        const newTask = { 
            ...req.body,   
            id: uuidv4(),  
        };
    */

    if (!title || !description || !date || !min || !emoji || !status) {
      throw new Error("Don't have any of the element of the json object"); //YS: Good but the client doesnt really know what that means - only you do. 
    }

    var allTasks = readAllTasks();
    allTasks.push(newTask);
    fs.writeFileSync("./task.json", JSON.stringify(allTasks));
    res.send({
      ok: "Added Task",
      task: allTasks
    });
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    }); //YS: You should send back the e.message instead of the whole error object. 
  }
});
app.get("/getAllTask", function (req, res) {
  //YS: Try/Catch? 
  var allTasks = readAllTasks();
  res.send(allTasks);
});
app["delete"]("/deleteTask/:id", function (req, res) {
  try {
    var id = req.params.id;
    var allTasks = readAllTasks();
    allTasks = allTasks.filter(function (task) {
      return task.id !== id;
    });
    fs.writeFileSync("./task.json", JSON.stringify(allTasks));
    res.send(allTasks);
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
});
app.put("/doneTask/:id", function (req, res) {
  try {
    var id = req.params.id;
    var allTasks = readAllTasks();
    task = allTasks.find(function (task) {
      return task.id === id;
    }); //YS: WHERE DID YOU GET TASK FROM????????  CONST/LET???  Now your variable has the same name as your callback (not good)! 

    task.status = "done";
    fs.writeFileSync("./task.json", JSON.stringify(allTasks));
    res.send(getOrderTask(allTasks));
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    }); //YS: e.message
  }
});
app.put("/updateTask/:id", function (req, res) {
  //YS: Very good 
  try {
    var id = req.params.id;
    var _req$body2 = req.body,
        title = _req$body2.title,
        description = _req$body2.description,
        date = _req$body2.date,
        min = _req$body2.min,
        emoji = _req$body2.emoji,
        status = _req$body2.status;

    if (!title || !description || !date || !min || !emoji || !status) {
      throw new Error("Don't have any of the element of the json object");
    }

    var allTasks = readAllTasks();
    task = allTasks.find(function (task) {
      return task.id === id;
    }); //YS: WHERE DID YOU GET TASK FROM????????  CONST/LET ???

    task.title = title;
    task.description = description;
    task.emoji = emoji;
    task.status = status;
    task.date = date;
    task.min = min;
    fs.writeFileSync("./task.json", JSON.stringify(allTasks));
    res.send(allTasks);
  } catch (e) {
    res.status(500).send({
      error: "".concat(e)
    });
  }
});
app.get("/getTask/:id", function (req, res) {
  var id = req.params.id;
  var allTasks = readAllTasks();
  task = allTasks.find(function (task) {
    return task.id === id;
  }); //YS: WHERE DID YOU GET TASK FROM????????  CONST/LET ???

  res.send(task);
});
app.get("/getPriority/:status", function (req, res) {
  var status = req.params.status;
  var allTasks = readAllTasks();

  if (status !== "everything") {
    task = allTasks.filter(function (task) {
      return task.status === status;
    });
    res.send(getOrderTask(task));
  } else {
    res.send(allTasks);
  }
});
app.get("/orderDate", function (req, res) {
  var allTasks = readAllTasks();
  res.send(getOrderTask(allTasks));
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});