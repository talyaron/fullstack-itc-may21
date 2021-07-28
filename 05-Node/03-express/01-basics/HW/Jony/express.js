const express = require("express");
const app = express();
const port = process.env.port || 8080;
const path = require("path");
const fs = require("fs");

app.use(express.static("public"));

//for YS, in case you see it. I have wanted to go beyond the exercise by add the elements on the board.
//I realized that I have some troubles that I havent fixed yet
//One is the ID unique, I use Math.Random or one nodejs library and when I click on the edit icon, I can update the element
//but because I havent had time enough, i couldnt figure out why this problem

let avengerList = [];
let avengerList2 = [];

app.use(express.json());

//Create a route for add an item
app.post("/addAvenger", (req, res) => {
  try {
    avengerList = readJson();
    avengerList2 = readJson(); //YS: Why do you need to read it 2 times?
    const { body } = req; //YS: You should destructure it like this: const { id, name } = req.body;
    const { name, id } = body;
    if (!name || !id) {
      throw new Error("Dont have name in the json object");
    }

    const isFound = avengerList.some((elem) => elem.id == id); //YS: Good

    if (isFound) throw new Error("This is id is already here");

    avengerList.push(body);
    avengerList2.push(body); //YS: ?

    fs.writeFileSync("./avenger.json", JSON.stringify(avengerList));
    res.send(avengerList);
  } catch (e) {
    res.status(500).send({ error: `${e}` });
  }
});

//create a route for showing all items
app.get("/getAvengers", (req, res) => {
  avengerList = readJson();
  avengerList2 = readJson(); //YS: Why 2?
  res.send(avengerList);
});

//create a route for deleting an item
app.delete("/deleteAvenger", (req, res) => { //YS: Should be:  /deleteAvenger/:id
  try {
    avengerList = readJson();
    const { body } = req; //YS: Incorrect destructuring
    const { id } = body;
    if (!id) throw new Error("The id does not exist in the list");
    const indexAvenger = avengerList.findIndex((avenger) => avenger.id === id); //YS: To delete use filter instead of findIndex and splice
    avengerList.splice(indexAvenger, 1);
    avengerList2.splice(indexAvenger, 1);
    fs.writeFileSync("./avenger.json", JSON.stringify(avengerList));
    res.send(avengerList);
  } catch (e) {
    res.status(500).send({ error: `${e}` });
  }
});

//create a route for updating an item
app.put("/updateAvenger", (req, res) => { //YS: Should be:  /updateAvenger/:id
  
  try {
    avengerList = readJson();
    const { body } = req; //YS: const { id, name } = req.body;
    const { id, name } = body; //YS: Ok, but you should send the ID in the parameters. Should be: /updateAvenger/:id
    if (!id || !name)
      throw new Error("The id or name does not exist in the list");
    const nameAvenger = avengerList.find((avenger) => avenger.id === id);
    nameAvenger.name = name;

    fs.writeFileSync("./avenger.json", JSON.stringify(avengerList));
    res.send(avengerList);
  } catch (e) {
    res.status(500).send({ error: `${e}` });
  }
});

//create a route to search items by name. id
app.get("/getAvengersbyName", (req, res) => { //YS: Should be getAvengersbyName/:id

  try {
    const regrExp = `${req.query.name}`; //YS: Good job, although you didnt have to do this. 
    const searchTermReg = new RegExp(regrExp, "i");
    avengerList = readJson();
    avengerList2 = readJson();
    avengerList = avengerList2.filter((avenger) =>
      searchTermReg.test(avenger.name)
    );
    res.send(avengerList);
  } catch (e) {
    res.status(500).send({ error: `${e}` });
  }
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/index.html"));
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function readJson() {
  const file = fs.readFileSync("./avenger.json");
  return JSON.parse(file);
}
