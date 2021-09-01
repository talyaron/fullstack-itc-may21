export class Student {
    id: string
    name: string
    constructor(name: string) {
        this.id = Math.random().toString(16)
        this.name = name
    }
}

export class Students {
    students: Array<Student>

    addStudent(student: Student): void {
        this.students.push(student)
    }
    getRandomStudents(number: number) {
        console.log('getRandomStudents');
    }
    removeStudent(studentId: string): void {
        console.log('removeStudent');

    }
}

export const myStudents = new Students()