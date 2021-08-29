export { };

import { Students, Student } from '../model/students';

const students = new Students();

export function getStudents(req, res) {
    res.send({ students: students.studentsArray });
}

export function addStudent(req, res) {
    try {
        const { name } = req.body;
        if (!name) throw new Error("No student was transferred");

        const student = new Student(name);
        console.log(student)
        students.addStudent(student);
        console.log('student.......');

        res.send({ students: students.studentsArray });

    } catch (error) {

    }

}

export function getRandomStudents(req, res){
    const number = req.body.number;
    console.log('getRandomStudents')
    const randomStudents = students.getRandomStudents(number);
    res.send({students:randomStudents});
}
