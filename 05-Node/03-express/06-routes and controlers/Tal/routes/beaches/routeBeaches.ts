export { };
const express = require('express');
const router = express.Router();

import {beachesCtl} from './controlBeaches';

router.get('/all', beachesCtl);

module.exports = router;