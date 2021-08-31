import {Student, Students} from '../models/student'

//ponerlo siempre afuera, sino no agrega al array y sobre escribe al renderizar
const students = new Students()


export function addStudent(req, res){

    const {firstname, lastname, age} = req.body
    const student = new Student(firstname, lastname, age)
    students.addStudent(student)
    res.send({students:students})
}

export function getStudents(req, res){
    res.send({students:students})
}