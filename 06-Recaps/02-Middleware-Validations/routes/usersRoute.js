const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/usersController');
const { doesUserExist } = require('../middleware/doesUserExist');
const { validateBody } = require('../middleware/validateBody');
const { encryptPwd } = require('../middleware/encryptPwd');
const { sendCookie } = require('../middleware/sendCookie');

const Schemas = require('../schemas/allSchemas');

router.post(
  '/register',
  validateBody(Schemas.regsiterSchemaFJS),
  doesUserExist,
  encryptPwd,
  sendCookie,
  UsersController.register
);


module.exports = router;
