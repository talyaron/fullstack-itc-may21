"use strict";
exports.__esModule = true;
exports.userSchema = void 0;
exports.userSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
        imgSrc: { type: "string" },
        prefColor: { type: "string" }
    },
    required: ["name", "imgSrc", "prefColor"],
    additionalProperties: true
};
