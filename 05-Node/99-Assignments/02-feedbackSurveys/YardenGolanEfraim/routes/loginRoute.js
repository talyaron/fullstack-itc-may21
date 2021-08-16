const express = require("express")
const router = express.Router()
const loginController = require("../controllers/loginController")

router
    .route("/")  //YS: If you only have one controller, you dont need to do this. Should be: router.post('/', loginController.login)
    .post(loginController.login) 
    
module.exports = router