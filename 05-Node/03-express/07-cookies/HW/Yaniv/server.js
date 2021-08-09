const express = require('express');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5555;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

const readJson = () => {
    try {
        const users = fs.readFileSync('users.json');
        return JSON.parse(users);
    
    } catch (error) {
        console.error(error);
    }
}

class Users {
    
    constructor() {
        this.usersList = readJson();
    }

    updateUsersJson() {
        try {
            fs.writeFileSync('users.json',JSON.stringify(this.usersList));

        } catch (error) {
            console.error(error);
        }
    }

    addUser(user) {
        try {
            this.usersList.push(user);
            
            this.updateUsersJson();

        } catch (error) {
            console.error(error);
        }
    }

    loginUser({ username, password }) {
        try {
            let loginUser = this.usersList;

            loginUser = loginUser.filter(user => user.username === username);
            loginUser = loginUser.filter(user => user.password === password);

            return loginUser;

        } catch (error) {
            console.error(error);
        }
    }
}

const users = new Users;

app.post('/register', (req ,res) => {

    try {
        const registeredUser = req.body;
        users.addUser(registeredUser);

        const { username } = registeredUser;
        const cookieName = 'loggedInUser';

        res.cookie(cookieName, JSON.stringify(registeredUser), { maxAge: 3600000, httpOnly: true });
        console.log(`${username} is saved in your ${cookieName} cookie`);

        console.log(registeredUser);
        res.send(registeredUser);
    
    } catch (error) {
        console.error(error);
        res.status(400).send({errorMsg: error.message});
    }
    
});

app.post('/login', (req ,res) => {

    try {
        const typedUser = req.body;
        const loginUser = users.loginUser(typedUser);
        
        const resToSent = (loginUser.length === 0) ? `Username and password combination doesn't exist. Please register or check again` : loginUser[0];
        
        if (typeof resToSent !== 'string') {
            const { username } = resToSent;
            const cookieName = 'loggedInUser';
    
            res.cookie(cookieName, JSON.stringify(resToSent), { maxAge: 3600000, httpOnly: true });
            console.log(`${username} is saved in your ${cookieName} cookie`);
            }

        console.log('from json to cookie:',resToSent);
        res.send(resToSent);
    
    } catch (error) {
        console.error(error);
        res.status(400).send({errorMsg: error.message});
    }    
});

app.get('/user', (req ,res) => {

    try {
        const { loggedInUser } = req.cookies;
        const Fetcheduser = JSON.parse(loggedInUser);
        
        console.log('from cookie to DOM:',Fetcheduser);
        res.send(Fetcheduser);

    } catch (error) {
        console.error(error);
        res.status(400).send({errorMsg: error.message});
    }    
});

app.listen(port, () => { console.log(`listening on port ${port}...`); });
