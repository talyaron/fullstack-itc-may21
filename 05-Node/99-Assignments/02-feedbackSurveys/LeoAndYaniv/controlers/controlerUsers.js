const userModel = require('../models/users');
const fs = require("fs");

const readJson = () => {
    try {
        const users = fs.readFileSync('./users.json');
        return JSON.parse(users);

    } catch (error) {
        console.error(error);
    }
};

function newUser(req, res) {
    console.log(req);
    const user = new userModel(req.body.username, req.body.email, req.body.password)
    const allUsers = readJson();
    allUsers.push(user)
    fs.writeFileSync("./users.json", JSON.stringify(allUsers));
    res.send({ message: 'A new User was added', users: allUsers });
}

exports.newUser = newUser