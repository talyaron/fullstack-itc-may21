interface Student{
    id:number;
    name:string;
}

let x:Array<Student> = [{id:1234, name:'Yarden'}, {id:24323, name:'golan'}]

console.log(x.find(student=>student.id === 1234));

let studentIndex:number = x.findIndex(student=>student.id === 1234);

 x[studentIndex].name = 'Yarden Tal';

 let z:string = 'bla bla'
 console.dir(z);

