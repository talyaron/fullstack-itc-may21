// REST API CRUD exercise:

const fs = require("fs")
const express = require("express")
const { v4: uuidv4 } = require("uuid")

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000


function readFile() {
  const friendsList = fs.readFileSync("./friends.json")
  return JSON.parse(friendsList)
  console.log(friendsList)
}
//Read:
app.get("/", function (req, res) {
  const friendsList = readFile()
  res.send(friendsList)
  console.log(friendsList)
})
//Create:
app.post("/", function (req, res) {
  const friendsList = readFile()
  const name = req.body.name
  const friend = { name: name, id: uuidv4() }
  friendsList.push(friend)
  fs.writeFileSync("./friends.json", JSON.stringify(friendsList))
  res.send("You have added a friend!")
})
//Delete:
app.delete("/:id", function (req, res) {
  const friendsList = readFile()
  const id = req.params.id
  const friendsToKeep = friendsList.filter((friend) => friend.id !== id)
  fs.writeFileSync("./friends.json", JSON.stringify(friendsToKeep))
  res.send("Deleted")
})
//Update:
app.put("/:id", function (req, res) {
  const friendsList = readFile()
  const id = req.params.id
  const updatedFriend = friendsList.find((friend) => friend.id === id)
  const updatedName = req.body.updatedName
  updatedFriend.name = updatedName
  fs.writeFileSync("./friends.json", JSON.stringify(friendsList))
  res.send("Updated!")
})

//Listen:
app.listen(PORT, function () {
  console.log(`App is listening on http://localhost:${PORT}`)
})
