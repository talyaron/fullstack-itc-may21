/* create login page
show the name in all other pages (create the 2-page site) */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");
const cookieParser = require('cookie-parser')

//Uuidv4 is to generate a new ID
const { v4: uuidv4 } = require('uuid');

//Joi is to validate the data I enter:
const Joi = require("joi");

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

//This function is to read the array (I create this so the information will be kept even if I turn off the server)
function readJsonAllUsers() {
    try {
        const usersList = fs.readFileSync("./allUsers.json");
        return JSON.parse(usersList);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

//Route to create a User
app.post('/createUser', (req, res) => {
    try {
        const { body } = req;
        const schema = Joi.object({
            nameUser: Joi.string().max(30).required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
        });

        const { error, value } = schema.validate({
            nameUser: body.nameUser,
            email: body.email,
            password: body.password
        });

        if (!error) {
            const user = {
                id: uuidv4(),
                dateCreated: Date.now(),
                nameUser: value.nameUser,
                email: value.email,
                password: value.password
            };
            const allUsers = readJsonAllUsers();
            allUsers.push(user);
            fs.writeFileSync("./allUsers.json", JSON.stringify(allUsers));
            res.send({ message: 'A new User was added', users: allUsers });
        } else {
            const msg = error.details[0].message;
            res.status(400).send(msg);
        }
    } catch (error) {
        res.status(500).send(error.message);
    };
});

//Route to login a User
app.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;
        let allUsers = readJsonAllUsers();
        const userExist = allUsers.find(user => (user.email === email) && (user.password === password))
        if (userExist) {
            const { nameUser } = userExist;
            const userCookie = JSON.stringify({ nameUser: nameUser, email: email });
            res.cookie('cookieName', userCookie, { maxAge: 300000000, httpOnly: true });
            res.send({ userInfo: userExist })
        } else {
            res.send({ message: 'Username or password are wrong, try again!', userInfo: null })
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/userInfo', (req, res) => {
    try {
        //Read cookies
        const { cookieName } = req.cookies
        const cookie = JSON.parse(cookieName);

        res.send({ cookie })
    } catch (error) {
        res.status(500).send(error.message)
    }
});

//This function is to listen to the port
app.listen(port, () => {
    try {
        console.log(`The server is running at port: ${port}`)
    } catch (error) {
        res.status(500).send(error.message)
    }
});