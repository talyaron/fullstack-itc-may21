export { };
const express = require('express');
const router = express.Router();

import { getSuveryShare, sendRespon, getResp } from '../controllers/responseControllers'

//YS: Nice, although this can be part of the survey routes
router.get('/', getSuveryShare);
router.get('/getResp', getResp);
router.post('/postResponds',sendRespon);




module.exports = router;