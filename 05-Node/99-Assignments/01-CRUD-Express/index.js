const express = require("express");
const app = express();
const port = process.env.PORT || 3009;
const fs = require("fs");
const { v4: uuidv4 } = require("uuid"); //Id for the users
app.use(express.json());
function readfile() {
  const users = fs.readFileSync("./users.json");
  return JSON.parse(users); //<---/
}


let allusers = readfile();

app.get("/users", (req, res) => {
  console.log(allusers);
  res.send(allusers);
});
//add user
app.post("/users", (req, res) => {
  
  const user = req.body;

  const userWithId = {
    ...user,
    id: uuidv4(),
  };

  allusers.push(userWithId);
  fs.writeFileSync("./users.json", JSON.stringify(allusers));

  res.send(allusers);
});
// find user
app.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = allusers.find((user) => user.id == id);
  res.send(foundUser);
});
//delete user
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  allusers = allusers.filter((user) => user.id !== id);
  res.send(allusers);
});
//edit user
app.put("/:id", (req, res) => { //change it to put***********
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const userUpdate = allusers.find((user) => user.id == id); //***not to use () on one var. */

  if (firstName) {
    userUpdate.firstName = firstName;
  }
  if (lastName) {
    userUpdate.lastName = lastName;
  }
  if (age) {
    userUpdate.age = age;
  }
  res.send(userUpdate);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
