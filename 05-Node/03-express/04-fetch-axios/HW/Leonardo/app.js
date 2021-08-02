/* create server-client app

in the server create an array of students (preferbly with a clouser)  

in the client, the user can add a student information ({name, age, id, avarage_grade})
the client send the added student information to the server. the server store the information on the array.

the user will enter the student id. in the client use 2 route requests. the user will get the information with on of two buttons.. one button will get the information with "params" and the second with "query".
the results will be showen on the DOM
 */

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//Joi is to validate the data I enter:
const Joi = require("joi");
//Uuidv4 is to generate a new ID
const { v4: uuidv4 } = require("uuid");
uuidv4(); //YS: Why are you using it here?

app.use(express.json());
app.use(express.static("public"));

class Students {
  //YS: I think it would be better if you write your array into a json file with writeFileSync - so that your information will be kept even if you turn off your server.
  list = [];

  addStudent(student) {
    this.list.push(student);
  }
  searchStudent(queryOrParam) {
    let searchedStudent = students.list.find(
      (student) => student.id === queryOrParam
    );
    return searchedStudent;
  }
}
const students = new Students();

//This route is to create a new student
app.post("/addStudent", (req, res) => {
  const { body } = req;
  const schema = Joi.object({
    //YS: Very nice! This is called middleware and it should go somewhere else, we will learn about it.
    firstname: Joi.string().min(3).max(30).required(),
    lastname: Joi.string().min(3).max(30).required(),
    age: Joi.number().integer().min(1).max(99).required(),
    averageGrade: Joi.number().min(0).max(10).required(),
  });
  const { error, value } = schema.validate({
    firstname: body.firstname,
    lastname: body.lastname,
    age: body.age,
    averageGrade: body.averageGrade,
  });
  if (!error) {
    const student = {
      id: uuidv4(), //YS: Very nice, another field that is usually added by the BE apart from ID is dateCreated (you can use moment or Date.now()  etc..)
      firstname: value.firstname,
      lastname: value.lastname,
      age: value.age,
      averageGrade: value.averageGrade,
    };
    students.addStudent(student);
    res.send(students.list);
  } else {
    const msg = error.details[0].message;
    res.status(400).send(msg);
  }
});

//This route is to show all the students
app.get("/getStudents", (req, res) => {
  try {
    res.send(students.list);
  } catch (error) {
    res.status(400).send(error);
  }
});

//This route will redirect the user to see the information of a student by params
app.get("/showStudentParam/:id", (req, res) => {
  try {
    const studentFounded = students.searchStudent(req.params.id); //YS: Why didn't you destructure?
    res.send([studentFounded]);
  } catch (error) {
    res.status(400).send(error);
  }
});

//This route will redirect the user to see the information of a student by querys
app.get("/showStudentQuery", (req, res) => {
  try {
    const studentFounded = students.searchStudent(req.query.id); //YS: Why didn't you destructure?
    res.send([studentFounded]);
  } catch (error) {
    res.status(400).send(error);
  }
});

//This route is to delete a student
app.delete("/deleteStudent/:id", (req, res) => {
  try {
    let { id } = req.params; //YS: Nice
    students.list = students.list.filter((student) => student.id !== id);
    res.send(students.list);
  } catch (e) {
    res.status(400).send(error);
  }
});

//This route is to sort the table (I tried not to DRY so I created a Switch, please Yona let me know if you have another idea on how to do it👏 )
//Create the next boolean to control the sort when user clicks:
let order = true;

//YS: Very nice! For objects, you can also use square bracket notation instead of dot notation. For example instead of writing req.params you can also write req["params"] (for any object).
// I think this can help you, instead of writing a.firstname you can write a[`${orderBy}`] and just use your logic once instead of for every case.

app.get("/sortTable/:orderBy", (req, res) => {
  try {
    let { orderBy } = req.params;
    console.log(req.params);
    switch (orderBy) {
      case "firstname":
        if (order === true) {
          const sort = students.list.sort((a, b) =>
            a.firstname.localeCompare(b.firstname)
          );
          res.send(sort);
          order = false;
        } else if (order === false) {
          const sort = students.list.sort((a, b) =>
            b.firstname.localeCompare(a.firstname)
          );
          res.send(sort);
          order = true;
        }
        break;
      case "lastname":
        if (order === true) {
          const sort = students.list.sort((a, b) =>
            a.lastname.localeCompare(b.lastname)
          );
          res.send(sort);
          order = false;
        } else if (order === false) {
          const sort = students.list.sort((a, b) =>
            b.lastname.localeCompare(a.lastname)
          );
          res.send(sort);
          order = true;
        }
        break;
      case "age":
        if (order === true) {
          const sort = students.list.sort((a, b) => a.age - b.age);
          res.send(sort);
          order = false;
        } else if (order === false) {
          const sort = students.list.sort((a, b) => b.age - a.age);
          res.send(sort);
          order = true;
        }
        break;
      case "average":
        if (order === true) {
          const sort = students.list.sort(
            (a, b) => a.averageGrade - b.averageGrade
          );
          res.send(sort);
          order = false;
        } else if (order === false) {
          const sort = students.list.sort(
            (a, b) => b.averageGrade - a.averageGrade
          );
          res.send(sort);
          order = true;
        }
        break;
    }
  } catch (error) {
    res.status(400).send({ error });
  }
});

//This function is to listen to the port
app.listen(port, () => {
  try {
    console.log(`The server is running at port:${port}`);
  } catch (error) {
    res.status(500).send(error);
  }
});
