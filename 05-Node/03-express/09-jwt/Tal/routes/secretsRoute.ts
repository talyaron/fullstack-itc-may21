const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');

const { secret } = require('../secrets/secrets');


import { passwordsControl } from '../controlers/passwordsControls';

function userRole(req, res, next) {
    try {
        const { user } = req.cookies;

        if (user === undefined) throw new Error('no user in cookie');

        const userDecoded = jwt.decode(user, secret);
        console.log(userDecoded)
        const { role } = userDecoded;
        if (role === undefined) throw new Error('No role in cookie')

        req.role = role;
        console.log(role)
        next();
    } catch (e) {
        console.error(e)
        res.status(500).send({ error: e.message })
    }
}

router.get('/getAllPasswords', userRole, passwordsControl);


module.exports = router;
