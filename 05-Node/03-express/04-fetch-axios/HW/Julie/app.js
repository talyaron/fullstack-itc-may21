// jshint esversion:6
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.static("public"));
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
app.use(cors());

let studentsArray = [];

app.post("/addStudent", (req, res) => {
  const newStudent = { ...req.body, id: uuidv4() };
  studentsArray.push(newStudent);
  res.send(newStudent);
});

app.get("/getStudentsArray", (req, res) => {
  res.send(studentsArray);
});

app.get("/getStudent/:id", (req, res) => {
  const idByParams = req.params.id;
  const foundByParams = studentsArray.find(
    (s) => s.id === parseInt(idByParams)
  );
  if (!foundByParams)
    res.status(404).send("The Student with this ID was not found");
  res.send(foundByParams);
});

app.get("/getStudent", (req, res) => {
  const idByQuery = req.query.id;
  const foundByQuery = studentsArray.find((s) => s.id === parseInt(idByQuery));
  if (!foundByQuery)
    res.status(404).send("The Student with this ID was not found");
  res.send(foundByQuery);
});

app.listen(port, () => {
  console.log(`Students server started on port ${port}`);
});
