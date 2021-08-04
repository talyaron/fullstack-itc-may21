const express = require("express");
const app = express();
const fs = require("fs");
// const cors = require("cors");   YS: If you are not using this please remove it. 
// app.use(cors());
//JSON
const localJson = () => {
  const fileJson = fs.readFileSync("./db-student.json");
  return JSON.parse(fileJson);
};

//Settings
app.set("port", 3500 || process.env.PORT);

//MidelWare
app.use(express.json());

//Routes

app.get("/getStudents", (req, res) => {
  const students = localJson();
  res.send(students);
});
app.get("/getStudentQuery", (req, res) => {
  let { id } = req.query;
  id = parseInt(id);
  const students = localJson();
  const findStudent = students.find((student) => student.id === id);
  res.send([findStudent]);
});
app.get("/getStudentParams/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const students = localJson();
  const findStudent = students.find((student) => student.id === id);
  res.send([findStudent]);
});

app.post("/postStudents", (req, res) => {
  try {
    const { name, id, age, avgrade } = req.body; //YS: You shouldn't be sending the id in the body, you should be adding it with uuidv4(). The id is created in the server/database. 
    const students = localJson();
    
    const addStudent = {
      id: parseInt(id), //YS: id: uuidv4(), 
      name: name,
      age: parseInt(age),
      avgrade: parseInt(avgrade),
    };
  
    
  
    // function getStudent() {
    //   return function __getInfo(addStudent) {        YS: Please remove commented code 
    //     return addStudent;
    //   };
    // }
  
    // const student = getStudent();
  
    students.push(addStudent);
    fs.writeFileSync("./db-student.json", JSON.stringify(students));
    res.send(students);
  } catch (error) {
    alert(error)
  }

});

app.delete("/deleteStudents/:id", (req, res) => {
  let { id } = req.params;
  console.log(id); //YS: Remove console.log
  id = parseInt(id);
  const students = localJson();
  const deleteStudent = students.filter((student) => student.id !== id);
  fs.writeFileSync("./db-student.json", JSON.stringify(deleteStudent));
  res.send([...deleteStudent]);
  //! COPIO EL ARRAY
});

app.use(express.static("public"));
//Listen
app.listen(app.get("port"), () => {
  console.log(`app listening at http://localhost:${app.get("port")}`);
});
