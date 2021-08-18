// export { };
const express = require('express');
const router = express.Router();

import {loginControl,registerControl} from '../controlers/userControls'

router.post('/login',loginControl);
router.post('/register', registerControl);

module.exports = router;
