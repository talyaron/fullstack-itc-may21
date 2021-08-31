// import {Students} from '../models/student';
// export function isFirstNameExist(req, res, next) {
//     try {
//         const {firstname} = req.body
//         const students = new Students ()
//         const isSameName = students.findStudentByName(firstname)
//         console.log(isSameName);
//         if(isSameName) res.status(404).send("Firstname already exist")
//         else{
//             next()
//         }
//     } catch (error) {
//     }
