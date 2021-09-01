export{};

export class Student{
    id:string;
    name: string;
    constructor(name:string){
        this.id  = Math.random().toString(16);
        console.log(this.id);
        this.name = name
    }
}

export class Students{
    student: Array<Student>;
    addStudent(student:Student):void{
        this.student.push(student)
    }
    getRandomStudent(number:number){
        console.log('getRandom')
    }
    deleteStudent(number:number){
        console.log('delete')
    }
}