export { };

export class Student {
  id: string;
  name: string;
  constructor(name: string) {
    this.id = Math.random().toString(16);
    this.name = name;
  }
}

export class Students {
  students: Array<Student> = [];

  addStudent(student: Student) {
    this.students.push(student);
  }

  removeStudent(studentId: string) {
    console.log('remove student');
  }

  randomStudents(number: number): Array<Student> {
    try {
      //I need a copy of the array to not modify the original
      const copyOfArray = JSON.parse(JSON.stringify(this.students))
      const randomStudents = [];

      for (let index = 0; index < number; index++) {
        const index = Math.floor(Math.random() * copyOfArray.length);
        const student = copyOfArray[index];
        randomStudents.push(student);
        copyOfArray.splice(index, 1)
        console.log(copyOfArray);
      }
      return randomStudents;

    } catch (error) {
      console.error(error);
    }
  }
}



