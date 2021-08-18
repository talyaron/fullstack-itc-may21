const express = require('express');
const router = express.Router();

import {passwordsControl} from '../controlers/passwordsControls'

router.get('/getAllPasswords',passwordsControl);


module.exports = router;
