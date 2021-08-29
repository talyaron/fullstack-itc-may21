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

    addStudent(student:Student){
        this.students.push(student)
    }

    getRandomStudent(number:number){
        //
    }

    removeStudent(studentId:string){
        //
    }
}