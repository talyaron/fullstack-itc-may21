"use strict";var express=require("express"),app=express(),port=process.env.PORT||3e3;app.use(express.static("public")),app.use(express.json());var students=[{name:"Dan",id:"458765384"},{name:"Tom",id:"5468568"}];app.get("/getStudents",function(e,t){t.send({students:students})}),app.post("/addStudent",function(e,t){console.log(e.body);var s=e.body,n=s.name,d=s.id;students.push({name:n,id:d}),t.send({message:"one person was added",students:students})}),app.post("/deleteStudent",function(e,t){var s=e.body.id;students=students.filter(function(e){return e.id!==s}),t.send({message:"one student record was deleted",students:students})}),app.put("/updateStudent",function(e,t){var s=e.body,n=s.id,d=s.name,u=students.findIndex(function(e){return e.id===n});-1<u?(students[u].name=d,t.send({message:"one student was updated",students:students})):t.send({message:"couldnt find the student",students:students})}),app.listen(port,function(){console.log("Server listening at http://localhost:".concat(port))});