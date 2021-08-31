import {Students} from '../models/student'

const students = new Students()

export function isFirstNameExist(req,res, next){
    const {firstname} = req.body;
    const isSameName = students.findStudentByName(firstname)
    if(isSameName) res.status(404).send({error:"First name already exists"})
    else next()
}