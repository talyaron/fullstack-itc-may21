export { };
const express = require('express');
const router = express.Router();
const Schemas = require('../schemas/schemas');

//imports from the middleweare------------------------>
import{ doRegUserExists,doLogInUserExists} from '../middlewear/userExsistsValid';
import { validateBody } from '../middlewear/validateBody'
import { encryptPassword,decryptPassword } from '../middlewear/encryptPassword'
import{userCookieWrite,userCookieRead} from '../middlewear/userCookie'

//import form controlers----------------->
import{registerUser,login} from '../controlers/controlerUsers';

router.post('/register',validateBody(Schemas.registerSchema),doRegUserExists, encryptPassword,userCookieWrite,registerUser);
router.post('/login',doLogInUserExists,userCookieWrite,decryptPassword,login);

module.exports = router;