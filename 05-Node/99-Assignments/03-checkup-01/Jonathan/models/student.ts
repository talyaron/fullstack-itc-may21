export { };

const fs = require("fs");
const path = require("path");
const allStudentsJSON = path.resolve(__dirname, "./data/students.json");
const { v4: uuidv4 } = require("uuid");


export const readAllStudents = () => {
    try {
        const allStudents = fs.readFileSync(allStudentsJSON);
        return JSON.parse(allStudents);
    } catch (error) {
        console.error(error);
    }
};


export class Student {
    id: string;
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number) {
        this.id = uuidv4()
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

export class Students {
    students: Array<Student>;

    constructor() {
        this.students = readAllStudents()
    }

    addStudent(student: Student) {
        this.students.push(student)
        this.writeAllStudents()
    }

    deleteStudent(id: string) {
        this.students = this.students.filter(student => student.id !== id)
        this.writeAllStudents()
    }

    editStudent(body: Student, id: string) {
        const studentFound = this.findStudentById(id)
        studentFound.firstname = body.firstname
        studentFound.lastname = body.lastname
        studentFound.age = body.age
        this.writeAllStudents()
        return this.students
    }

    findStudentById(id: string): Student {
        const studentSelected = this.students.find(student => student.id === id)
        return studentSelected
    }

    findStudentByName(firstname: string): Student {
        const isFound = this.students.find(student => student.firstname === firstname)
        return isFound
    }

    writeAllStudents() {
        fs.writeFileSync(allStudentsJSON, JSON.stringify(this.students));

    }
}


