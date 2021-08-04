export { };
const express = require('express');
const router = express.Router();

import {drinks} from '../../model/images';


router.get('/all', (req, res) => {
    res.send(drinks);
  });


module.exports = router;