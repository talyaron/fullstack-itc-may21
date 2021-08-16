const {
    User,
    users,
    createGuestCookie
} = require('../models.js')
const Ajv = require("ajv");
const ajv = new Ajv()

exports.add_user = (req, res) => {

    try {

        const schema = {
            type: "object",
            properties: {
                username: {
                    type: "string"
                },
                password: {
                    type: "string"
                },
                email: {
                    type: "string"
                }
            },
            required: ["username", "password", "email"],
            additionalProperties: false
        }
        const validate = ajv.compile(schema)


        const {
            body
        } = req;

        const valid = validate(body)
        if (!valid) {
            validate.errors.forEach(err =>
                console.log(err.message)
            )
            throw new Error("Invalid data was transferd")
        }

        if (users.users.find(info => info.email === body.email) === undefined && body.password === "") { //Ok, could be more DRY and separate things into different variables/destructure
            users.newUser(new User(body.username, body.email, "")) 
            const guestUser = users.users[users.users.length - 1]
            createGuestCookie(guestUser, res)
            res.send(guestUser)
        } else if (users.users.find(info => info.email === body.email && info.password === '') != undefined) {
            users.users.find(info => info.email === body.email).password = body.password
            users.users.find(info => info.email === body.email).name = body.username
            res.send(users)
        } else if (users.users.find(info => info.email === body.email && info.password != '' && body.password === "") != undefined) {
            const guestUser = users.users.find(info => info.email === body.email)
            createGuestCookie(guestUser, res)
            res.send(guestUser)
        } else if (users.users.find(info => info.email === body.email) != undefined) {
            res.send("Email already taken!")
        } else {
            users.newUser(new User(body.username, body.email, body.password))
            res.send("success!")
        }
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }
}

exports.get_all_users = (req, res) => {
    res.send(users)
}