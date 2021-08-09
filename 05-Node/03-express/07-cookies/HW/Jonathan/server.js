const express = require("express");
const app = express();
const fs = require("fs");
const cookieParser = require('cookie-parser');


app.use(cookieParser())

app.use(express.json());

const readAllLogin = () => {
    const allLogin = fs.readFileSync("./login.json");
    return JSON.parse(allLogin);
}


app.post('/signUpUser', function (req, res) {
    try {

        const allLogin = readAllLogin();

        const isFound = allLogin.some(elem => (elem.email === req.body.email) || elem.username === req.body.username)

        if (!isFound) {

            const user = {
                ...req.body,
                balance: parseFloat((Math.random() < 0.5 ? -1 * Math.random() : 1 * Math.random()) * 1000 + 200).toFixed(2)
            }


            allLogin.push(user)

            fs.writeFileSync("./login.json", JSON.stringify(allLogin));

            res.send({ ok: "User Created", user: allLogin });
        } else {
            throw new Error("this is user alredady exist")

        }

    } catch (e) {
        res.status(500).send({ error: `${e.message}` });
    }

})


app.post('/loginUser', function (req, res) {


    try {
        const { email, password } = (req.body)

        const allLogin = readAllLogin();

        const isUserPassOK = allLogin.some(elem => (elem.email === email) && (elem.password === password))

        if (isUserPassOK) {
            const userLogin = allLogin.find(elem => (elem.email === email) && (elem.password === password))
            res.cookie('cookieName', JSON.stringify(userLogin), { maxAge: 3000, httpOnly: true });
            res.send({ ok: 'Welcome to Bank Jonathan' });
        } else {
            throw new Error("Is incorrect your email or password. Try Again")
        }

    } catch (e) {
        res.status(500).send({ error: `${e.message}` });
    }



});


app.get('/getCookie', function (req, res) {
    try {
        const { cookieName } = req.cookies
        if(!cookieName) throw new Error("Nothing is on the cookie")
        const cookie = JSON.parse(cookieName)
        console.log(cookie)
        res.send(cookie);
    } catch (e) {
        res.status(500).send({ error: `${e.message}` });
    }
});

app.use(express.static('public'));

app.listen(3000, function () { console.log('Listen on 3000'); });

