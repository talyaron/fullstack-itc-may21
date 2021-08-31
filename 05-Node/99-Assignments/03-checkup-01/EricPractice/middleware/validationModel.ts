import {Students} from '../models/student';

const students = new Students ()

export function isFirstNameExist(req, res, next) {
    try {
        const {firstname} = req.body
        const isSameName = students.findStudentByName(firstname)
        if(isSameName) res.status(404).send({error: "firstname already exist"})
  
    else
        next()
    
        


    } catch (error) {
        
    }
}
