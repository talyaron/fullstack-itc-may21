"use strict";
exports.__esModule = true;
exports.schemaUser = void 0;
exports.schemaUser = {
    type: "object",
    required: ["firstname", "image", "color"],
    properties: {
        firstname: { type: 'string', minLength: 1, errorMessage: "Length should be more than 1 character" },
        image: { type: 'string', errorMessage: "URL wrong" },
        color: { type: 'string', minLength: 1, errorMessage: "Should select a color" }
    },
    additionalProperties: true
};
