import { Student, Students } from "../model/students"

export {}
 const student = new Students()

export const getStudent=(req,res)=>{
res.send({student})
}

export const addStudents =(req,res)=> {
   try {
     
    const {name} = req.body
    if(!name) throw new Error('no Stundet was trasfered')  

    const student =   new Student(name);

    student.addStudent(student)

   } catch (error) {
       
   }
}