import { User } from '../models/users'

import { secret } from './secret/secret';

const jwt = require('jwt-simple');

export function writeCookie(req, res, next) {
    try {
        const { firstname, image, color } = req.body;
        const user = new User(firstname, image, color)
        const id = JSON.stringify({ id: user.id })
        const tokenUser = jwt.encode(id, secret)
        res.cookie('cookieUser', tokenUser, { maxAge: 3000000000, httpOnly: true })
        req.user = user
        next()
    } catch (e) {
        alert(e)
    }
}