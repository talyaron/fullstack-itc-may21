const Ajv = require("ajv");
const ajv = new Ajv()

exports.registerSchemaAJV = {
  type: 'object',
  properties: {
    email: {
      type: "string", format: 'email'
    },
    password: {
      type: "string", minLength: 5 
    },
    repassword: {
      type: "string", minLength: 5 
    },
    role: {
      type: "string"
    },
    admincode: {
      type: "string"
    }
  },
  required: ['email', 'password', 'repassword', 'role'],
  additionalProperties: false,
};

exports.loginSchemaAJV = {
  type: 'object',
  properties: {
    email: {
      type: "string", format: 'email'
    },
    password: {
      type: "string", minLength: 5 
    }
  },
  required: ['email', 'password'],
  additionalProperties: false,
};

exports.addToCartSchemaAJV = {
  type: 'object',
  properties: {
    productID: {
      type: "string"
    }
  },
  required: ['productID'],
  additionalProperties: false,
};

exports.updateAmountFromCartSchemaAJV = {
  type: 'object',
  properties: {
    updatedValue: {
      type: "number"
    }
  },
  required: ['updatedValue'],
  additionalProperties: false,
};

exports.updateProductsSchemaAJV = {
  type: 'object',
  properties: {
    description: {
      type: "string"
    },
    price: {
      type: "number"
    }
  },
  required: ['description', 'price'],
  additionalProperties: false,
};

exports.addProductSchemaAJV = {
  type: 'object',
  properties: {
    description: {
      type: "string"
    },
    price: {
      type: "string"
    }
  },
  required: ['description', 'price'],
  additionalProperties: false,
};
