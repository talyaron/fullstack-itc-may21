import {Students} from '../models/student';

const students = new Students ()

export function isFirstNameExist(req, res, next) {
    try {
        const {firstname, actions} = req.body
        const {id} = req.params
        if(students===undefined) next()
        else{
            const isSameName = students.findStudentByName(firstname)

            if(actions ===0){
                const isSameName = students.findStudentByName(firstname)
                if(isSameName) res.status(404).send({error: "firstname already exist"})
                else next()
            }else{
                const findStudent = students.findStudentById(id)
                if(isSameName === undefined || findStudent.firstname === firstname) next()
                
                else{
                    if(isSameName) res.status(404).send({error: "firstname already exist"})
                    next()   
                }
            }
    } 


    } catch (error) {
        
    }
}
