const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.const || 3000;
const cookieParser = require("cookie-parser");
const e = require("express");
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
      name: name,
      password: password,
    };
    userData.push(addUser);
    fs.writeFileSync("./userData.json", JSON.stringify(users));
    res.send(users);
  } catch (error) {
    console.error(error);
  }
});

app.post("/loginUser", function (req, res) {
  try {
    const { email, password } = req.body;

    const userData = readUserData();

    const isUserPassOK = userData.some(
      (elem) => elem.email === email && elem.password === password
    );

    if (isUserPassOK) {
      const userLogin = userData.find(
        (elem) => elem.email === email && elem.password === password
      );
      res.cookie("cookieName", JSON.stringify(userLogin), {
        maxAge: 3000,
        httpOnly: true,
      });
      res.send({ ok: "Hello Raziel" });
    } else {
      throw new Error("wrong email or password");
    }
    app.get("/getCookie", function (req, res) {
      try {
        const { cookieName } = req.cookies;
        const cookie = JSON.parse(cookieName);
        res.send(cookie);
      } catch (e) {
        res.status(500).send({ error: `${e.message}` });
      }
    });
  } catch (e) {
    console.error(e);
  }
});

app.get("/getCookie", function (req, res) {
  try {
    const { cookieName } = req.cookies;
    const cookie = JSON.parse(cookieName);
    res.send(cookie);
  } catch (e) {
    res.status(500).send({ error: `${e.message}` });
  }
});
app.listen(port, () => {
  console.log("Server listen on port", port);
});
