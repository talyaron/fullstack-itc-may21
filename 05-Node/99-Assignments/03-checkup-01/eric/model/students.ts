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
    students:Array<Student> = []

    
    addStudent(student:Student):void {
        this.students.push(student);
    }

    getRandomStudent(number:number):Array<Student> {
        console.log('getRandomStudent');
        const students = JSON.parse(JSON.stringify(this.students))
        const randomStudent = []
        
        for(let i = 0 ; i <number && students.length>0; i++){
            const index = Math.floor(Math.random()*students.length)
            const student = students[index]
            randomStudent.push(student);
            students.splice(index, 1)


        }
        return randomStudent
        
    }

    removeStudent(studentId:string){
        console.log('removeStudent')
    }

}