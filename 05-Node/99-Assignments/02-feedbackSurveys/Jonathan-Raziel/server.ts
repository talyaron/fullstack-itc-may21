const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require('cookie-parser');

//const routeUser = require('./routes/routeUser');
//app.use('/users', routeUser)

//app.use(cookieParser())
app.use(express.json());
app.use(express.static('public'));

const model = require("./models/users");

const readUser = () => {
    const allLogin = fs.readFileSync("./user.json");
    return JSON.parse(readUser);
}

app.post('/usersRegister', (req, res) => {

    //const user1 = new model.User("pepe", 'a@a.com','a1a23',[]);
    const user = new model.User(req.body.username, req.body.email, req.body.password, [])
    const userList = new model.UserList()
    userList.add(user);
    //fs.writeFileSync("./user.json", JSON.stringify(userList));
    console.log(userList);
    res.send({ok:"true"});
})




app.listen(3001, function () { console.log('Listen on 3001'); });

//https://stackoverflow.com/questions/41228221/can-you-export-multiple-classes-from-a-single-nodejs-module

