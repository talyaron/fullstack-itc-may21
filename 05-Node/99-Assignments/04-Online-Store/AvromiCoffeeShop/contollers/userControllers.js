var _a = require('../models/userModels.js'), addUser = _a.addUser, getAllUsers = _a.getAllUsers;
exports.register = function (req, res) {
    try {
        var _a = req.body, fname = _a.fname, lname = _a.lname, company = _a.company, email = _a.email, password = _a.password, repassword = _a.repassword;
        var user = addUser(fname, lname, company, email, password);
        res.send(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.login = function (req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password;
        // b- crypt
        var allUsers = getAllUsers();
        var user = allUsers.find(function (user) { return user.email === email_1; });
        if (user) {
            if (user.password === password) {
                console.log(user);
                res.send({ name: user.fname, role: user.role });
                return;
            }
            //     else {
            //         throw new Error("password does not match")
            //     }
            // }
            // else {
            //     throw new Error("User Not Found")
        }
    }
    catch (error) {
        console.log(error);
        res.send("hi");
    }
};
