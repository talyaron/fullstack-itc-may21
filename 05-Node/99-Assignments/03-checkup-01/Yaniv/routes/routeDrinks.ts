export { };
const express = require('express')
const router = express.Router();

import { drinks } from '../model/images';

router.get('/all', (req, res) => {
    res.send(drinks);
})

router.get('/first', (req, res) => {
    res.send(drinks[0]);
})

module.exports = router;