export { };
const express = require('express');
const router = express.Router();

import {allBeaches,firstBeach} from '../controlers/controlersBeaches'

router.get('/all',allBeaches)
router.get('/first', firstBeach)

module.exports = router;