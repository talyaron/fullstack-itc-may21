// jshint esversion:6

const express = require("express");
const app = express();
app.use(express.json());
const { v4: uuidv4 } = require("uuid");

const fs = require("fs");

function readFile() {
  const allThings = fs.readFileSync("./things.json");
  return JSON.parse(allThings);
}

app.get("/", function (req, res) {
  const allThings = readFile();
  res.send(allThings);
});

app.post("/", function (req, res) {
  const allThings = readFile();
  console.log(allThings);
  const { name, colour } = req.body;
  const thing = { name: name, id: uuidv4() };
  allThings.push(thing);
  fs.writeFileSync("./things.json", JSON.stringify(allThings));
  res.send("Thing added");
});

app.delete("/:id", function (req, res) {
  const allThings = readFile();
  const { id } = req.params;
  const reducedArray = allThings.filter((thing) => thing.id !== id);
  fs.writeFileSync("./things.json", JSON.stringify(reducedArray));
  res.send("Thing deleted");
});

app.put("/:id", function (req, res) {
  const allThings = readFile();
  const { id } = req.params;
  const requiredThing = allThings.find((thing) => thing.id === id);
  const { newName } = req.body; //YS: Why dont you use this in the line below? 
  requiredThing.name = req.body.newName; //YS: Why are you using the req.body.newName if in the line before you already have the newName? Should be:  requiredThing.name = newName;
  fs.writeFileSync("./things.json", JSON.stringify(allThings));
  res.send("Thing updated");
});

app.listen(4040, function () {
  console.log("crudnode is running on the server");
});
