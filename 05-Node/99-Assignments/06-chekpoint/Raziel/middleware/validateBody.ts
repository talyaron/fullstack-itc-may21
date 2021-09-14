export { };

const Ajv = require('ajv');
const ajv = new Ajv();

//Validate with AJV
export function validateBody(schema) {
    try {
        return (req, res, next) => {
            const valid = ajv.validate(schema, req.body);
            if (!valid) {
                //Get the error in that way to send the error to the DOM
                res.status(400).send(ajv.errors[0]['message']);
                return;
            }
            next();
        };
    } catch (error) {
        console.error(error);
    }
};
