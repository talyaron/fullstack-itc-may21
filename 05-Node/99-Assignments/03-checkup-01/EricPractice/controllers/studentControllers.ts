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

export function deleteStudent(req, res){
    const {id} = req.params
    students.deleteStudent(id)

    res.send({message: "student deleted"})
}

export function bringStudent(req, res){
    const {id} = req.params
    const student = students.findStudentById(id)
    res.send({student:student})

}


export function editStudent(req, res){
    const {id} = req.params
    const allStudents = students.editStudent(req.body, id)
    res.send({students: allStudents})
}