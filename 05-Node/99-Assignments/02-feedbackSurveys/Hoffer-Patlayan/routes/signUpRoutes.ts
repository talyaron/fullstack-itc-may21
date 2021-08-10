export { };
const express = require('express');
const router = express.Router();

import {registerUser} from '../controllers/signUpControllers'

router.get('/registerUser', registerUser)


module.exports = router