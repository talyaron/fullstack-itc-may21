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
var readUser = function () {
    var allLogin = fs.readFileSync("./user.json");
    return JSON.parse(readUser);
};
app.post('/usersRegister', function (req, res) {
    //const user1 = new model.User("pepe", 'a@a.com','a1a23',[]);
    var user = new model.User(req.body.username, req.body.email, req.body.password, []);
    var userList = new model.UserList();
    userList.add(user);
    //fs.writeFileSync("./user.json", JSON.stringify(userList));
    console.log(userList);
    res.send({ ok: "true" });
});
app.listen(3001, function () { console.log('Listen on 3001'); });
//https://stackoverflow.com/questions/41228221/can-you-export-multiple-classes-from-a-single-nodejs-module
