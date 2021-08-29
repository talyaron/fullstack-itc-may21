export class Student {
    id:string;
    name:string;
    constructor(name:string) {
        this.id = Math.random().toString(16);
        this.name = name;
    }
}


export class Students{
    students:Array<Student>;

    addStudent(student:Student):void{
        this.students.push(student);
    }

    getRandomStudent(number:number){
        console.log('RandomStudent');
        
    }

    removeStudent(studentIs:string){
        console.log('RemoceStudent');
        
    }
}