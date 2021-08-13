const models = require('../models')
const Ajv = require("ajv")

exports.getAdmin = (req, res) => {
    res.send(selectedAdmin)
}