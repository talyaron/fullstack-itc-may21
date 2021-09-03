"use strict";
exports.__esModule = true;
exports.schemaUser = void 0;
exports.schemaUser = {
    type: "object",
    required: ["name", "image", "color"],
    properties: {
        name: { type: 'string', minLength: 1, maxLength: 20, errorMessage: "Debe completarse" },
        image: { type: 'string', format: 'url', minLength: 1, errorMessage: "No es un formato o debe completarse" },
        color: { type: 'string', minLength: 1, errorMessage: "Debe seleccionarse el color" }
    },
    additionalProperties: true
};
