const express = require("express");
const app = express();
const port = process.env.port || 3000;

//dataBase
// const students = [];
function outer() {
  const students = [];

  function inner(student) {
    if (student === "l") {
      return students;
    }

    students.push(student);
    // students.forEach(student => {
    //     console.log(student)
    // });
    return students;
  }
  return inner;
}

const students = outer();

app.use(express.json()); //YS: This should be at the top 

app.use(express.static("public")); //YS: This should be at the top 

app.put("/newStudent", (req, res) => { //YS: To add is POST, to edit is PUT
  const student = req.body.newStudent;
  students(student);
  // students.push(student)

  res.send({
    student,
    send: "OK", //YS: You dont have to send back the "ok" part, just the student is fine
  });
});

app.get("/", (req, res) => {
  const { studentId } = req.query.id; //YS: Incorrect destructuring 
  const searchedStudent = students("l").filter(
    (student) => student.id === studentId
  );
  res.send({
    searchedStudent,
  });
});

app.get("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const searchedStudent = students("l").filter( //YS: You can use find instead of filter 
      (student) => student.id === id
    );

    const result =
      searchedStudent.length === 0 ? "Student not Found" : searchedStudent;

    res.send({
      result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ error: error.message }); //YS: Nice
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
