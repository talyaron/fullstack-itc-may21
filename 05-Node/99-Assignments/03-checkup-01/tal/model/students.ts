export class Student{
    id: string;
    name:string;

    constructor( name:string){
        this.id = Math.random().toString(16);
        console.log(this.id);
        this.name = name;
    }
}

export class Students{
    students:Array<Student>;
    
    addStudent(student:Student):void{
        this.students.push(student)
    }

    getRandomStudents(number:number){
        console.log('getRandomStudents')
    }

    removeStudent(studentId:string){
        console.log('removeStudent')
    }
}