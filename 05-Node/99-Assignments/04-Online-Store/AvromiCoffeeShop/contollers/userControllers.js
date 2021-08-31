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
// exports.login = (req, res) => {
//     try {
//         const {email, password} = req.body;
//         // b- crypt
//     } catch (error) {
//         console.log(error);
//     }
// }
