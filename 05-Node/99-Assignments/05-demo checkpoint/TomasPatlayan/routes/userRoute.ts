

export { };
const express = require('express');
const router = express.Router();

import { getAllUser, registerUser } from "../controller/userControllers";
import { validateUser } from "../middleware/validationMiddleware";
import { userSchema } from "../schemas/userSchemas";



router.post('/register',validateUser(userSchema),registerUser).get('/getAllUsers', getAllUser)

module.exports = router;