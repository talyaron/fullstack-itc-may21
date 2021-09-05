export {};

const Ajv = require("ajv");
const ajv = new Ajv();
const addFormats = require("ajv-formats");
addFormats(ajv);

export function validateBody(schema) {
  try {
    return (req, res, next) => {
      try {
        const valid = ajv.validate(schema, req.body);
        if (!valid) {
          console.log(ajv.errors[0]["message"]);
          res.status(409).send({ message: `The data you enter doesn't comply with the requirements:\n${ajv.errors[0]["message"]}\n\nPlease verify and try again.` });
          return;
        }
        next();
      } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
      }
    };
  } catch (error) {
    console.error(error.message);
  }
}
