const {
    getAllUsers
} = require('../models/userModels.js')
const swal = require('sweetalert');
//import schema
const Ajv = require('ajv')
const ajv = new Ajv();
const addFormats = require('ajv-formats')
addFormats(ajv)

exports.doesUserExist = (req, res, next) => {
    try {
        const { email } = req.body;
        const allUsers = getAllUsers();

        const user = allUsers.find(user => user.email === email)

        if (user) {

            res.status(400).send(JSON.stringify("this user is taken "));
            return; //not sending 
        }
        next();
    } catch (error) {
        console.log(error.message);
    }

}

exports.validateBody = (schema) => {
    return (req, res, next) => {
        const valid = ajv.validate(schema, req.body)
        if (!valid){ 
            res.status(400).send(ajv.errors)
            return;
        } 
        next();
    }
}