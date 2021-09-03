var Ajv = require("ajv");
var ajv = new Ajv();
exports.addBookAJV = {
    type: 'object',
    properties: {
        bookName: {
            type: "string"
        },
        author: {
            type: "string"
        }
    },
    required: ['bookName', 'author'],
    additionalProperties: false
};
exports.searchBookAJV = {
    type: 'object',
    properties: {
        searchTerm: {
            type: "string"
        }
    },
    required: ['searchTerm'],
    additionalProperties: false
};
