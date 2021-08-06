const express = require("express");
const app = express();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
//JSON
const localJson = () => {
  const fileJson = fs.readFileSync("./task.json");
  return JSON.parse(fileJson);
};
//Settings
app.set("port", 3500 || process.env.PORT);

//MidelWare
app.use(express.json());

//Routes

//?GET

app.get("/getTask", (req, res) => {
  const students = localJson();
  res.send(students);
});

//TODO: POST
app.post("/addTask", (req, res) => {
  const { name,description } = req.body;
  const task = localJson();
  const addTask = {
    id: uuidv4(),
    name: name,
    description: description
  };

  task.push(addTask);
  fs.writeFileSync("./task.json", JSON.stringify(task));
  //   fs.readFileSync("./task.json");
  res.send(task);
});

app.use(express.static("public"));

//! DELETE
app.delete("/deleteTask/:id", (req, res) => {
  let { id } = req.params;
  const tasks = localJson();
  const deleteTask = tasks.filter((task) => task.id !== id);
  fs.writeFileSync("./task.json", JSON.stringify(deleteTask));
  res.send([...deleteTask]);
});

//* PUT
app.put("/updateTask/:id",(req,res) => {
    const { id } = req.params;
    const { name,description } = req.body;
    const tasks = localJson();

    const updateTask = tasks.find((task)=> task.id === id)
    fs.readFileSync("./task.json", JSON.stringify(updateTask));
    updateTask.name = name;
    updateTask.description = description;

    res.send(tasks)
})

//Listen
app.listen(app.get("port"), () => {
  console.log(`app listening at http://localhost:${app.get("port")}`);
});
