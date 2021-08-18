const express = require('express');
const router = express.Router();

import {passwordsControl} from '../controlers/passwordsControls';

function userRole (req, res, next){
    const {user} = req.cookies;
    const {role} = user;
    console.log(role)
    req.role = role;
    next();
}

router.get('/getAllPasswords',userRole,passwordsControl);


module.exports = router;
