export { };

const fs = require("fs");
const path = require("path");
const allStudentsJSON = path.resolve(__dirname, "./data/students.json");
const { v4: uuidv4 } = require("uuid");
// Regex = require("regex");

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

    randomStudents(randomNumber: number){
        const randomArray = []
        const students = JSON.parse(JSON.stringify(this.students))
        for (let i = 0; i < randomNumber && students.length > 0; i++){
            const index = Math.floor(Math.random() * students.length)
            const studentRandom = students[index]
            randomArray.push(studentRandom)
            students.splice(index, 1)
        }
        return randomArray
    }

    searchStudentsByLastName(lastname: string) {
        const regrExp: string = `^${lastname}` 
        //[2-39] esto es que tenga el 2 al 3 pero tambien el 9
        //[2-49-i] esto que tenga del 2 al 4 con el 9 y de a la i
        //const regrExp: string = `[${lastname}]` //has that letters
        const searchTermReg: RegExp = new RegExp(regrExp, 'i');
        const studentsFoundByLastName = this.students.filter(student => searchTermReg.test(student.lastname))
        // return studentsFoundByLastName
        return studentsFoundByLastName.length === 0 ? this.students : studentsFoundByLastName
    }

    writeAllStudents() {
        fs.writeFileSync(allStudentsJSON, JSON.stringify(this.students));

    }
}

