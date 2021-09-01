const express = require('express')
const router = express.Router()

import {userRegister, loginUser} from '../controllers/userControllers'
import {userExist} from '../middleware/userExist'
import {registerSchema} from '../schema/allSchemas'
import {validateBody} from '../middleware/validations'
import {encryptPwd} from '../middleware/encryptPwd'
import {isAdmin} from '../middleware/getCookieUser'

router.post('/register', validateBody(registerSchema), encryptPwd, userExist, userRegister)
router.post('/userLogin', loginUser)


module.exports = router

