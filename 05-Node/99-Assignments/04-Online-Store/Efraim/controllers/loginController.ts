const { users } = require('../models/classes')

exports.login = (req, res) => {
    try {
        const token = req.token
        const URL = "/productlist.html"
        res.send({URL, token});

    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }

}