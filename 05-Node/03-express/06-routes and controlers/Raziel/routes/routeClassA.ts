export { };
const express = require('express');
const router = express.Router();
 import{allStudentsA} from '../controlers/controlClassA';

 router.get('/all',allStudentsA);

 module.exports = router;     