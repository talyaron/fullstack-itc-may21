export class Student {
    id: string;
    name: string;

    constructor(name:string){
        this.id = Math.random().toString(16)
        this.name = name;
        console.log(this.id)
    }
}

export class Students {
    students:Array<Student>;

    addStudent(student:Student):void {
        this.students.push(student);
    }

    getRandomStudent(number:number){
        console.log('getRandomStudent');
        
    }

    removeStudent(studentId:string){
        console.log('removeStudent')
    }

}