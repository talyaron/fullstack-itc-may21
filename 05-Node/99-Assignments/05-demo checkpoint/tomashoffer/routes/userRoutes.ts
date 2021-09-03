export {};
// REQUIRES
const express = require("express");
const router = express.Router();
import { schemaUsers, schemaLogIn } from '../schemas/schemas';
import { validateUser } from '../middlewares/validation';
import { passCorrect } from '../middlewares/compareUser';
import { sendCookieUser } from '../middlewares/sendCookie';

// CONTROLLERS
import { registerUser, logInUser, getAllUsers } from "../controllers/userControllers";

router.post('/register',validateUser(schemaUsers), registerUser);
router.post('/logIn', validateUser(schemaLogIn), sendCookieUser, passCorrect, logInUser)
router.get('/getUsers', getAllUsers)


module.exports = router;
