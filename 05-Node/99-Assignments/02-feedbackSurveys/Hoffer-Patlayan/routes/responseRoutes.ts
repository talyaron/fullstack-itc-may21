export { };
const express = require('express');
const router = express.Router();

import { getSuveryShare } from '../controllers/responseControllers'

router.get('/', getSuveryShare)
// router.get('/:id', getSuveryShareCookie)




module.exports = router;