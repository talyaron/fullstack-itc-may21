const { User, Users, Survey, Surveys, Question, Questions, users } = require('../models.js')
const Ajv = require("ajv");
const ajv = new Ajv()

exports.get_admin = (req, res) => {
    const { admin } = req.cookies
        const cookie = JSON.parse(admin);
        const {selectedAdmin} = cookie;
    res.send(selectedAdmin)
}