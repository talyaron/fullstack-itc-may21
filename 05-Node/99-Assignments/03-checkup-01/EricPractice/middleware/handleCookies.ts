import {Student} from '../models/student'
import {secret} from '../secret/secret'

const jwt = require('jwt-simple')


export function writeCookie (req,res, next){
    const {firstName, lastName, age} = req.body
    const student = new Student (firstName, lastName, age)
    const id = {id:student.id}
    const tokenStudent = jwt.encode(id, secret)
    res.cookie('cookieName', tokenStudent, { maxAge: 300000000, httpOnly: true })
    req.students = student
}

