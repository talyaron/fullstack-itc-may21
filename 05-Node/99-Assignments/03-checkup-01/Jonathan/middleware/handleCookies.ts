import { Student } from '../models/student'

import { secret } from './secret/secret';

const jwt = require('jwt-simple');

export function writeCookie(req, res, next) {
    const { firstname, lastname, age } = req.body;
    const student = new Student(firstname, lastname, age)
    const id = JSON.stringify({id: student.id}) 
    const tokenStudent = jwt.encode(id, secret)
    res.cookie('cookieStudent', tokenStudent, { maxAge: 3000000000, httpOnly: true })
    req.students = student
    next()

}

// export function readCookie(req, res, next) {
//     try {
//         const { cookieStudent } = req.cookies
//         if (!cookieStudent) throw new Error("Nothing is on the cookie")
//         const decoded = jwt.decode(cookieStudent, secret)
//         req.id = decoded
//         next()
//     } catch (e) {
//         res.status(500).send({ error: `${e}` });
//     }

// }