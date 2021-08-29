export { };

import {Students, Student} from '../model/students';

const students = new Students()


export function getStudents (req, res) {
    res.send({students});
}

export function addStudent (req, res) {
    try{
        const name = req.body
        if(!name) throw new Error('no student was transfered')
        const student = new Student(name)
        students.addStudent(student)
        console.log('student');
        
        res.send({students: students.students})


    }catch(err){

    }

    
}
