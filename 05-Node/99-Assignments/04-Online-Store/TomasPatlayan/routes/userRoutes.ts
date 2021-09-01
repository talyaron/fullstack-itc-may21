export{}
import {    getUser, userLogin, userRegister } from "../controllers/userController";
import { encryptPassword } from "../middleware/middlewareEcnrypPassword";
import {userExist} from "../middleware/middlewareUser";
import { validateBody, validateLogin } from "../middleware/middlewareValidations";
import { loginSchema, registerSchema } from "../schemas/allSchemas";


const express = require('express');
const router = express.Router();
router.post('/register',validateBody(registerSchema), userExist , userRegister ).post('/login' ,validateLogin(loginSchema) ,userLogin) 
module.exports = router;