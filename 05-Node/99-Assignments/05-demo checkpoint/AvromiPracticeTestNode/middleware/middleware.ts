const Ajv = require('ajv')
const ajv = new Ajv();
const addFormats = require('ajv-formats')
addFormats(ajv)
const {userSchema} = require('../schema/allSchemas')

export const validateBody = (req, res, next) => {
   
        console.log("in validataor..")
        const valid = ajv.validate(userSchema, req.body)
        if (!valid){ 
            res.status(400).send(ajv.errors)
            return;
        } 
        next();

}
