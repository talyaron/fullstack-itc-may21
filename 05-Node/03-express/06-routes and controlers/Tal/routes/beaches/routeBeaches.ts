export { };
const express = require('express');
const router = express.Router();

import {beaches} from '../../model/images';

router.get('/all', (req, res) => {
    res.send(beaches);
});

module.exports = router;