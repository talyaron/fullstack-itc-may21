export { };
import { Student, Students } from '../model/student';

let students = new Students();

export function getStudent(req, res) {
    res.send(students)
}

export function addStudent(req, res) {
    try {
        const { name } = req.body;
        if (!name) throw new Error('No student was transfered');

        const newStudent = new Student(name);
        students.addStudent(newStudent);
        res.send({ students: students.students });
    } catch (error) {
        console.error(error);
    }
}

export function getRandomStudent(req, res) {
    try {
        const randomStudent = students.randomStudents(3);
        res.send({ students: randomStudent });
    } catch (error) {
        console.error(error);
    }
}