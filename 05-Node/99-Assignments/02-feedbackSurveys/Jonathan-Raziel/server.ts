const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require('cookie-parser');
const { uuid } = require('uuidv4');

//const routeUser = require('./routes/routeUser');
//app.use('/users', routeUser)

app.use(cookieParser())
app.use(express.json());
app.use(express.static('public'));

//const userModel = require("./models/users");

const userModel = require("./routes/routeUser")
const userLogin = require("./routes/routeUser")
const getCookie = require("./routes/routeUser")

const addSurveys = require("./routes/routesSurveys")

app.use('/register', userModel);
app.use('/login', userLogin);
app.use('/cookie', getCookie);

app.use('/surveys',addSurveys)

//  const readAllUsers = () => {
//      const allUsers = fs.readFileSync("./user.json");
//      return JSON.parse(allUsers);
// }

//const userList = new model.UserList();

// app.post('/usersRegister', (req, res) => {
//     try {
//     //const user1 = new model.User("pepe", 'a@a.com','a1a23',[]);
//     const allUsers = readAllUsers();
//     const isFound = allUsers.some(elem => (elem.email === req.body.email) || elem.username === req.body.username)
//     if (!isFound) {
//         const user = new userModel(req.body.username, req.body.email, req.body.password, [])
//         allUsers.push(user)
//         fs.writeFileSync("./user.json", JSON.stringify(allUsers));
//         res.send({ok:"User Created", allUsers: allUsers});
//     } else {
//         throw new Error("this is user is on the list")

//     }
    
//     }catch(e) {
//         res.status(500).send({ error: `${e}` });
//     }
// })


// app.post('/loginUser', function (req, res) {


//     try {
//         const { email, password } = (req.body)

//         const allUsers = readAllUsers();

//         const isUserPassOK = allUsers.some(elem => (elem.email === email) && (elem.password === password))

//         if (isUserPassOK) {
//             const userLogin = allUsers.find(elem => (elem.email === email) && (elem.password === password))
//             res.cookie('cookieName', JSON.stringify(userLogin), { maxAge: 3000, httpOnly: true });
//             res.send({ ok: 'Welcom admin' });
//         } else {
//             throw new Error("Is incorrect your email or password. Try Again")
//         }

//     } catch (e) {
//         res.status(500).send({ error: `${e.message}` });
//     }

// });




app.listen(8000, function () { console.log('Listen on 8000'); });

//https://stackoverflow.com/questions/41228221/can-you-export-multiple-classes-from-a-single-nodejs-module

