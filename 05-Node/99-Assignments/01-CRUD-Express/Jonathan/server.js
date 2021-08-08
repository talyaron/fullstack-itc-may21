const express = require("express");
const app = express();
const port = process.env.port || 3000;
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

app.use(express.static("public"));
app.use(express.json());

const readAllTasks = () => {
  const allTasks = fs.readFileSync("./task.json");
  return JSON.parse(allTasks);
};

function getOrderTask(allTasks) { //YS: You should change the text of your button to Order Tasks by Date or something because the user doesnt know what they are ordering by. 
  allTasks.sort(function (a, b) {
    return a.datetime < b.datetime ? -1 : a.datetime > b.datetime ? 1 : 0;
  });
  return allTasks;
}

app.post("/addTask", (req, res) => {
  try {
    const { title, description, date, min, emoji, status, datetime } = req.body;

    const newTask = {   
      id: uuidv4(),
      title: title,
      description: description,
      date: date,
      min: min,
      emoji: emoji,
      status: status,
      datetime: datetime,
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

    const allTasks = readAllTasks();

    allTasks.push(newTask);

    fs.writeFileSync("./task.json", JSON.stringify(allTasks));

    res.send({ ok: "Added Task", task: allTasks });
  } catch (e) {
    res.status(500).send({ error: `${e}` }); //YS: You should send back the e.message instead of the whole error object. 
  }
});

app.get("/getAllTask", (req, res) => { //YS: Try/Catch? 
  const allTasks = readAllTasks();
  res.send(allTasks);
});

app.delete("/deleteTask/:id", (req, res) => {
  try {
    let { id } = req.params;
    let allTasks = readAllTasks();
    allTasks = allTasks.filter((task) => task.id !== id);
    fs.writeFileSync("./task.json", JSON.stringify(allTasks));
    res.send(allTasks);
  } catch (e) {
    res.status(500).send({ error: `${e}` });
  }
});

app.put("/doneTask/:id", (req, res) => { 
  try {
    let { id } = req.params;
    let allTasks = readAllTasks();
    task = allTasks.find((task) => task.id === id); //YS: WHERE DID YOU GET TASK FROM????????  CONST/LET???  Now your variable has the same name as your callback (not good)! 
    task.status = "done";
    fs.writeFileSync("./task.json", JSON.stringify(allTasks));
    res.send(getOrderTask(allTasks));
  } catch (e) {
    res.status(500).send({ error: `${e}` }); //YS: e.message
  }
});

app.put("/updateTask/:id", (req, res) => { //YS: Very good 
  try {
    let { id } = req.params;
    const { title, description, date, min, emoji, status } = req.body;

    if (!title || !description || !date || !min || !emoji || !status) {
      throw new Error("Don't have any of the element of the json object");
    }

    let allTasks = readAllTasks();

    task = allTasks.find((task) => task.id === id);  //YS: WHERE DID YOU GET TASK FROM????????  CONST/LET ???

    task.title = title;
    task.description = description;
    task.emoji = emoji;
    task.status = status;
    task.date = date;
    task.min = min;

    fs.writeFileSync("./task.json", JSON.stringify(allTasks));
    res.send(allTasks);
  } catch (e) {
    res.status(500).send({ error: `${e}` });
  }
});

app.get("/getTask/:id", (req, res) => {
  let { id } = req.params;
  const allTasks = readAllTasks();
  task = allTasks.find((task) => task.id === id); //YS: WHERE DID YOU GET TASK FROM????????  CONST/LET ???
  res.send(task);
});

app.get("/getPriority/:status", (req, res) => {
  let { status } = req.params;
  const allTasks = readAllTasks();
  if (status !== "everything") {
    task = allTasks.filter((task) => task.status === status);
    res.send(getOrderTask(task));
  } else {
    res.send(allTasks);
  }
});

app.get("/orderDate", (req, res) => {
  const allTasks = readAllTasks();
  res.send(getOrderTask(allTasks));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
