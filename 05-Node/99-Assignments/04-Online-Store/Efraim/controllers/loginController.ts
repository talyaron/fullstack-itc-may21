const { users } = require('../models/classes')

exports.login = (req, res) => {
    try {
        const token = req.token
        const URL = "/productlist.html" //YS: This should be done in the FE, not BE. (once you recieve the token, you change the URL)
        res.send({URL, token});

    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }

}