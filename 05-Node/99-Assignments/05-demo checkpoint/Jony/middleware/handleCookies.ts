import { User } from '../models/user'

import { secret } from './secret/secret';

const jwt = require('jwt-simple');

export function writeCookie(req, res, next) {
    try {
        const { name, image, color } = req.body;
        const user = new User(name, image, color)
        const id = JSON.stringify({ id: user.id })
        const tokenUser = jwt.encode(id, secret)
        res.cookie('cookieUser', tokenUser, { maxAge: 3000000000, httpOnly: true })
        req.user = user
        next()
    } catch (e) {
        alert(e)
    }
}