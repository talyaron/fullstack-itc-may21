export {};
// REQUIRES
const express = require("express");
const router = express.Router();
import { schemaUsers, schemaLogIn } from '../schemas/schemas';
import { validateUser } from '../middlewares/validation';

// CONTROLLERS
import { registerUser } from "../controllers/userControllers";

router.post('/register', registerUser);


module.exports = router;
