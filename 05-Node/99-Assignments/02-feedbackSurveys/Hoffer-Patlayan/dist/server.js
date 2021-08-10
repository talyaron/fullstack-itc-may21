var express = require("express");
var app = express();
var fs = require("fs");
var cookieParser = require("cookie-parser");
var uuidv4 = require("uuid").v4;
// LEER JSON Users
var localJson = function () {
    var fileJson = fs.readFileSync("./users.json");
    return JSON.parse(fileJson);
};
app.set("port", 3500 || process.env.PORT);
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
// GET USER FROM COOKIES
app.get("/getUser", function (req, res) {
    0;
    var cookieName = req.cookies.cookieName;
    var cookie = JSON.parse(cookieName);
    var name = cookie.name;
    res.send(name);
});
// POST USER (SIGN IN)
app.post("/signUp", function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
    var users = localJson();
    var addUser = {
        id: uuidv4(),
        name: name,
        email: email,
        password: password
    };
    users.push(addUser);
    fs.writeFileSync("./users.json", JSON.stringify(users));
    res.send(users);
});
app.post("/login", function (req, res) {
    try {
        var _a = req.body, name_1 = _a.name, email_1 = _a.email, password_1 = _a.password;
        var users = localJson();
        var correctUser = users.some(function (elements) {
            return elements.name === name_1 &&
                elements.email === email_1 &&
                elements.password === password_1;
        });
        if (correctUser) {
            var doLogin = users.find(function (elements) {
                return elements.name === name_1 &&
                    elements.email === email_1 &&
                    elements.password === password_1;
            });
            res.cookie("cookieName", JSON.stringify(doLogin), {
                maxAge: 3000000,
                httpOnly: true
            });
            res.send({ ok: "Hello, thanks for coming back" });
        }
        else {
            throw new Error("No hay PEPE");
        }
    }
    catch (e) {
        res.status(500).send({ e: "" + e });
    }
});
app.listen(app.get("port"), function () {
    console.log("server running at http://localhost:" + app.get("port"));
});
