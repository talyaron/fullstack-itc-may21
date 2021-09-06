export { };

import { Student, Students } from '../model/student';


const students = new Students();
export function getStudents(req, res) {
    res.send({ students });
}

export function addStudent(req, res) {
    try {
        const { name } = req.body;
        if (!name) throw new Error('No student was transferred')
        const newStudent = new Student(name);
       
        students.addStudent(newStudent);
        res.send({ students: students.students })

    } catch (e) {
        res.status(400).send({ error: `${e.message}` })
    }
}
