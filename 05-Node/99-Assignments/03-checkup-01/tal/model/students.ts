export class Student{
    id: string;
    name:string;

    constructor( name:string){
        this.id = "id_"+ Math.random().toString(16);
        console.log(this.id);
        this.name = name;
    }
}

export class Students{
    studentsArray:Array<Student>;

    constructor(){
        this.studentsArray = [];
    }
    
    addStudent(student:Student){
        console.log('add student')
        this.studentsArray.push(student);
        console.log('add student 2')
    }

    getRandomStudents(number:number):Array<Student>{
        console.log('getRandomStudents');

        const students = JSON.parse(JSON.stringify(this.studentsArray));
        const randomStudents =[];

        for(let i = 0; i<number && students.length > 0; i++){
            const index = Math.floor(Math.random()*students.length);
            const student = students[index];
            randomStudents.push(student);
            students.splice(index, 1);
            console.log(students)
            
        }
        return randomStudents;
    }

    removeStudent(studentId:string){
        console.log('removeStudent')
    }
}