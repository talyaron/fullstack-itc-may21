const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");


// LEER JSON Users
const localJson = () => {
  const fileJson = fs.readFileSync("./users.json");
  return JSON.parse(fileJson);
};

app.set("port", 3500 || process.env.PORT);
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));


// GET USER FROM COOKIES
app.get("/getUser", (req, res) => {0
  const { cookieName } = req.cookies;
  const cookie = JSON.parse(cookieName);
  const { name } = cookie;
  res.send(name);
});

// POST USER (SIGN IN)
app.post("/signUp", (req, res) => {
  const { name, email, password } = req.body;
  const users = localJson();
  const addUser = {
    id: uuidv4(),
    name: name,
    email: email,
    password: password,  
  };
  users.push(addUser);
  fs.writeFileSync("./users.json", JSON.stringify(users));
  res.send(users);
});

app.post("/login", (req, res) => {
  try {
    const { name, email, password } = req.body;
    const users = localJson();
    const correctUser = users.some(
      (elements) =>
        elements.name === name &&
        elements.email === email &&
        elements.password === password
    );
    if (correctUser) {
      const doLogin = users.find(
        (elements) =>
          elements.name === name &&
          elements.email === email &&
          elements.password === password
      );
      res.cookie("cookieName", JSON.stringify(doLogin), {
        maxAge: 3000000,
        httpOnly: true,
      });
      res.send({ ok: "Hello, thanks for coming back" });
    } else {
      throw new Error("No hay PEPE");
    }
  } catch (e) {
    res.status(500).send({ e: `${e}` });
  }
});

app.listen(app.get("port"), () => {
  console.log(`server running at http://localhost:${app.get("port")}`);
});