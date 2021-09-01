const Ajv = require("ajv");
const ajv = new Ajv()

exports.registerSchemaAJV = {
  type: 'object',
  properties: {
    name: {
      type: "string"
    },
    imageURL: {
      type: "string" 
    },
    color: {
      type: "string"
    }
  },
  required: ['name', 'imageURL', 'color'],
  additionalProperties: false,
};