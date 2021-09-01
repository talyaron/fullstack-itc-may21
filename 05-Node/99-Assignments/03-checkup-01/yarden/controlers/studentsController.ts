import { Student, Students } from '../model/students';

const students = new Students()

export function getStudents(req, res) {
    res.send({ getStudents: true })
}

export function add_Student(req, res) {
    try {
        const { name } = req.body
        if (!name) throw new Error('No Student')
        const newStudent = new Student(name)
        students.addStudent(newStudent)

        res.send({ students: students.students })
    } catch (error) {
        console.error(error)
    }
    const { student } = req.body
}