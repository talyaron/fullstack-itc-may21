const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

const localJson = () => {
  const fileJson = fs.readFileSync("./users.json");
  return JSON.parse(fileJson);
};

app.set("port", 3500 || process.env.PORT);
app.use(cookieParser());
app.use(express.json());

app.get("/getUser", (req, res) => {
  const { cookieName } = req.cookies;
  const cookie = JSON.parse(cookieName);
  const { name } = cookie;
  res.send(name);
});

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
  } catch (error) {
    res.status(500).send({ error: `${e}` });
  }
});
app.use(express.static("public"));

app.listen(app.get("port"), () => {
  console.log(`app listening at http://localhost:${app.get("port")}`);
});
