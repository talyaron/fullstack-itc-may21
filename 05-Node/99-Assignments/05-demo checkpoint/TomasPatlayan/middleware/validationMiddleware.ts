 import Ajv from 'ajv';
 import addFormats from 'ajv-formats';

 const ajv = new Ajv();
 addFormats(ajv);


 export const validateUser = (schema) => {
    return (req, res, next) => {
      const valid = ajv.validate(schema, req.body);
      if (!valid) {
        res.status(400).send(ajv.errors);
        return
      }
      next()
    };
  };