const express = require("express");
const app = express();
const fs = require("fs");

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
  const { name } = req.body;
  const task = localJson();
  const addTask = {
    name: name,
  };

  task.push(addTask);
  fs.writeFileSync("./task.json", JSON.stringify(task));
  fs.readFileSync("./task.json");
  res.send(task);
});

app.use(express.static("public"));

//Listen
app.listen(app.get("port"), () => {
  console.log(`app listening at http://localhost:${app.get("port")}`);
});
