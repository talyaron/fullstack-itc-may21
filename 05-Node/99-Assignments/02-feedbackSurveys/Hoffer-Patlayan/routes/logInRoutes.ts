export { };
const express = require('express');
const router = express.Router();

import {logInUser} from '../controllers/dist/logInControllers'

router.post('/postLogIn', logInUser)


module.exports = router