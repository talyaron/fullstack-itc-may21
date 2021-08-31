export class Student{
    id:string;
    name:string;

    constructor(name:string){
        this.id = Math.random().toString(16)
        this.name = name
    }

}

export class Students{
    students:Array<Student>;

    constructor(){
        this.students = []
    }

    addStudent(student:Student){
        this.students.push(student)
        return this.students
    }

    getRandomStudent(number:number){
        //
    }

    removeStudent(studentId:string){
        //
    }
}