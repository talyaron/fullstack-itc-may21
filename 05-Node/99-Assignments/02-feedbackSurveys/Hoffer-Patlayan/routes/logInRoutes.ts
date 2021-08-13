export { };
const express = require('express');
const router = express.Router();


import {logInUser} from '../controllers/logInControllers'

router.post('/postLogIn', logInUser)


module.exports = router;