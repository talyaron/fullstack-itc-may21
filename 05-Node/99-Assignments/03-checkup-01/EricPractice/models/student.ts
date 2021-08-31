
const fs = require("fs");
const { v4: uuidv4} = require("uuid")

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
        this.students = []
    }

    addStudent(student:Student){
        this.students.push(student)
    }

    findStudentByName(firstname:string){
        const isFound = this.students.find(student =>student.firstname === firstname)
        return isFound
    }

}


