export {};
const express = require("express");
const router = express.Router();

import {bringInfo, deleteUsers, editUser, getAllUser, registerUser, searchByFirstname } from "../controller/userControllers";
import { validateUser } from "../middleware/validationMiddleware";
import { userSchema } from "../schemas/userSchemas";

router
  .post("/register", validateUser(userSchema), registerUser)
  .get("/getAllUsers", getAllUser)
  .get("/bringInfoUser/:id",bringInfo)
  .post("/deleteUser/:id", deleteUsers)
  .post("/updateUser/:id", editUser)
 .get('/searchByFirstname', searchByFirstname)

module.exports = router;
