export const userSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
        imgSrc: { type: "string" },
        prefColor: { type: "string" },
    },
    required: ["name", "imgSrc", "prefColor"],
    additionalProperties: true
}