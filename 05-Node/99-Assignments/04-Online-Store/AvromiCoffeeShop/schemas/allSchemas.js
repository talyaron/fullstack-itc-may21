exports.registerSchema = {
    type: "object",
    properties: {
        fname: { type: "string" },
        lname: { type: "string" },
        company: { type: "string" },
        email: { type: "string", format: "email" },
        password: { type: "string" },
        repassword: { type: "string" }
    },
    required: ["fname", "lname", "email", "password"],
    additionalProperties: true
};
