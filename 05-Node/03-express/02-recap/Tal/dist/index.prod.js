"use strict";var students=[],express=require("express"),app=express(),port=3e3,bodyParser=require("body-parser");app.use(bodyParser.json()),app.get("/",function(e,t){t.send("Hello World!")}),app.get("/getStudents",function(e,t){t.send({students:students})}),app.get("/getStudent",function(t,e){console.log(t.query);var s=students.filter(function(e){return e.name===t.query.name});e.send({ok:!0,students:s})}),app.post("/addStudent",function(e,t){var s=e.body;students.push(s),t.send({ok:!0,students:students})}),app.listen(port,function(){console.log("Example app listening at http://localhost:".concat(port))});