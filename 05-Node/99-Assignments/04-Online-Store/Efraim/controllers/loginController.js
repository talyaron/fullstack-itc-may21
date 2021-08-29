var users = require('../models/classes').users;
exports.login = function (req, res) {
    try {
        var token = req.token;
        var URL = "/productlist.html";
        res.send({ URL: URL, token: token });
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            error: e.message
        });
    }
};
