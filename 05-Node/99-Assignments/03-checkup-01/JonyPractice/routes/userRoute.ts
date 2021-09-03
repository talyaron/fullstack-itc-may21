const express = require('express');
const router = express.Router();

import { register, login } from '../controllers/userControllers'

import { validateBody } from '../middleware/validateBody'
import { doesUserExist } from '../middleware/doesUserExist'
import { encryptPwd } from '../middleware/encryptPwd'
import { sendCookie} from '../middleware/sendCookie'

import { regsiterSchema, loginSchema } from '../schemas/allSchemas'

router.post('/register', doesUserExist, encryptPwd, sendCookie, register)
      .post('/login', login)

module.exports = router;