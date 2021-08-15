const { users } = require('../models.js')
const Ajv = require("ajv");
const ajv = new Ajv()

exports.guest_voter = (req, res) => {
    try{
    const { guest } = req.cookies
    console.log(guest)
    const guestCookie = JSON.parse(guest);
    console.log(guestCookie)
    const {guestUser} = guestCookie;
    console.log(guestUser)
    res.send(guestUser)
}catch (e) {
    console.error(e)
}}

exports.post_votes = (req, res) => {

    try {

        const schema = {
            type: "object",
            properties: {
                ID: {
                    type:"string"
                },
                votes: {
                    type:"array"
                },
                votersID: {
                    type: "string"
                }
            },
            required: ["ID", "votes", "votersID"],
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
        console.log(body.ID, body.votes)
        const { adminIndex } = req.cookies
        const cookieIndex = JSON.parse(adminIndex);
        const {selectedAdminIndex} = cookieIndex;
        const { admin } = req.cookies
        const cookie = JSON.parse(admin);
        const {selectedAdmin} = cookie;
        for(i=0; i< body.votes.length; i++){
        selectedAdmin.createdSurvey.find(survey => survey.surveyID === body.ID).questions[i].voters.score.push(body.votes[i])
        selectedAdmin.createdSurvey.find(survey => survey.surveyID === body.ID).questions[i].voters.voterID.push(body.votersID)
    }
        users.users[selectedAdminIndex] = selectedAdmin

        const adminCookie = JSON.stringify({ selectedAdmin })
        res.cookie('admin', adminCookie, { maxAge: 300000000, httpOnly: true });
        res.send(selectedAdmin);
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }
}

