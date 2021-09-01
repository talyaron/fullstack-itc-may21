
const fs = require("fs");
const path = require("path");
const { v4: uuidv4} = require("uuid")
const allStudentsJSON = path.resolve(__dirname, "models/json/students.json");

export const readAllStudents = () => {
    const allUStudents = fs.readFileSync("models/json/students.json");
    return JSON.parse(allUStudents);
}

export class Student{
    id: string;
    firstname:string;
    lastname: string;
    age:number;

    constructor(firstname:string, lastname:string, age:number) {
        this.id = uuidv4();    
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;


    }

}

export class Students{
    students:Array<Student> 

    constructor(){
        this.students = readAllStudents()
    }

    addStudent(student:Student){
        this.students.push(student)
        this.writeAllStudents()
    }

    deleteStudent(id: string){
        this.students = this.students.filter(student => student.id !== id)
        this.writeAllStudents()
    }

    findStudentByName(firstname:string):Student{
        const isFound = this.students.find(student =>student.firstname === firstname)
        return isFound
    }

    writeAllStudents() {
        fs.writeFileSync("models/json/students.json", JSON.stringify(this.students));
    }

    findStudentById(id:string){
        const studentSelected = this.students.find(student => student.id === id)
        return studentSelected
    }

    editStudent(body:Student, id:string){
        const studentFound = this.findStudentById(id)
        studentFound.firstname = body.firstname
        studentFound.lastname = body.lastname
        studentFound.age = body.age
        this.writeAllStudents()
        return this.students
    }


    searchStudentsByLastname(lastname:string){
        
        const regrExp: string = `^${lastname}`
        const searchTermReg: RegExp = new RegExp(regrExp, "i")
        
        const studentsFoundByLastname = this.students.filter(student => searchTermReg.test(student.lastname))
        return studentsFoundByLastname

    }    


    randomStudent(randomNumber:number){
        const randomArray = []
        const students = JSON.parse(JSON.stringify(this.students))
        for(let i = 0; i<randomNumber && students.length > 0; i++){
            const index = Math.floor(Math.random()*students.length)
            const studentRandom = students[index]
            randomArray.push(studentRandom)
            students.splice(index, 1)
        }
        return  randomArray
    }
}


