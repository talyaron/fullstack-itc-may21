const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.const || 3000;
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require('uuid');

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

function readUserData() {
  const userData = fs.readFileSync("./userData.json");
  return JSON.parse(userData);
}

app.post("/signUp", (req, res) => {
  try {
    const { name, password } = req.body;
    const userData = readUserData();
    const addUser = {
     id: uuidv4(),
      name: name,
      password: password
    };
    userData.push(addUser);
    fs.writeFileSync("./userData.json", JSON.stringify(userData));
    res.send(userData);
  } catch (error) {
  res.status(400).send(error.message);
  }
});





    app.post('/loginUser', (req, res) => {
      try {
        const { name, password } = req.body;
        const userData = readUserData();
        const userExist = userData.find(user => (user.name === name) && (user.password === password))
          if (userExist) {
              const { nameUser } = userExist;
              const userCookie = JSON.stringify({ nameUser:name });
              res.cookie('cookieName', userCookie, { maxAge: 300000001, httpOnly: true });
              res.send({ userInfo: userExist })
          } else {
              res.send({ message: 'Username or password are wrong, try again!'})
          }
      } catch (error) {
          res.status(500).send(error.message);
      }
  });


  app.get('/userInfo', (req, res) => {
    try {
        //Read cookies
        const { cookieName } = req.cookies;
        const cookie = JSON.parse(cookieName);

        res.send({ cookie })
    } catch (error) {
        res.status(500).send(error.message)
    }
});


app.listen(port, () => {
  console.log("Server listen on port", port);
});






























