import { createUser, getAllUsers, searchBooksData } from "../controllers/userControllers";
import { validateDataBook } from "../middlewares/validationMiddleware";
import { schemaBook } from "../schemas/userSchema";

export{}
const express = require('express');
const router = express.Router();


router.post('/postUser',validateDataBook(schemaBook), createUser)
.get('/getUsers',getAllUsers)
.put('/searchBook',searchBooksData)







module.exports = router