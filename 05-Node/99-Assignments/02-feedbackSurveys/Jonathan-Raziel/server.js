var express = require("express");
var app = express();
var fs = require("fs");
var cookieParser = require('cookie-parser');
//const routeUser = require('./routes/routeUser');
//app.use('/users', routeUser)
//app.use(cookieParser())
app.use(express.json());
app.use(express.static('public'));
var model = require("./models/users");
var readAllUsers = function () {
    var allUsers = fs.readFileSync("./user.json");
    return JSON.parse(allUsers);
};
//const userList = new model.UserList();
app.post('/usersRegister', function (req, res) {
    try {
        //const user1 = new model.User("pepe", 'a@a.com','a1a23',[]);
        var allUsers = readAllUsers();
        var isFound = allUsers.some(function (elem) { return (elem.email === req.body.email) || elem.username === req.body.username; });
        if (!isFound) {
            var user = new model(req.body.username, req.body.email, req.body.password, []);
            allUsers.push(user);
            fs.writeFileSync("./user.json", JSON.stringify(allUsers));
            res.send({ ok: "User Created", allUsers: allUsers });
        }
        else {
            throw new Error("this is user is on the list");
        }
    }
    catch (e) {
        res.status(500).send({ error: "" + e });
    }
});
app.listen(3001, function () { console.log('Listen on 3001'); });
//https://stackoverflow.com/questions/41228221/can-you-export-multiple-classes-from-a-single-nodejs-module
