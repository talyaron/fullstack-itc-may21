const { users, getAdminCookie, createAdminCookie, getAdminCookieIndex } = require('../models.js')
const Ajv = require("ajv");
const ajv = new Ajv()

exports.guest_voter = (req, res) => {
    try{
    const { guest } = req.cookies
    const guestCookie = JSON.parse(guest);
    const {guestUser} = guestCookie;
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
        const selectedAdminIndex = getAdminCookieIndex(req)  //YS: Again, there are too many objects and indexes, make more variables or destructure the objects
        const selectedAdmin = getAdminCookie(req)
        if(selectedAdmin.createdSurvey.find(survey => survey.surveyID === body.ID).questions[0].voters.voterID.find(id=> id === body.votersID) ===undefined){
        for(i=0; i< body.votes.length; i++){
        selectedAdmin.createdSurvey.find(survey => survey.surveyID === body.ID).questions[i].voters.score.push(body.votes[i])
        selectedAdmin.createdSurvey.find(survey => survey.surveyID === body.ID).questions[i].voters.voterID.push(body.votersID)
    }
        users.users[selectedAdminIndex] = selectedAdmin
        createAdminCookie(selectedAdmin, res)
        res.send("vote success!");}
        else{
            res.send("already voted!")
        }
    } catch (e) {
        console.log(e)
        res.status(400).send({ 
            error: e.message
        });
    }
}

