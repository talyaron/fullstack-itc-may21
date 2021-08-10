export {};
const express = require('express')
const router = express.Router();

import { allUsers } from '../controlers/controlerUsers';

router.get('/all',allUsers)

module.exports = router