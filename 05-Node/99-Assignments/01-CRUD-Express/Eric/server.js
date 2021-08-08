/*You should have a list of tasks
create a task
update a task (done/not done/ update text)
delete a task

make it responsive, and look and feel of KEEP

//optional
order tasks*/

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const { v4: uuidv4 } = require("uuid");

const fs = require("fs");

app.use(express.static("public"));
app.use(express.json());

const readAllEmployes = () => {
  const allEmployes = fs.readFileSync("./employes.json");
  return JSON.parse(allEmployes);
};
let allEmployes = readAllEmployes();

app.get("/getEmployes", (req, res) => {
  res.send(allEmployes);
});

app.post("/addEmployes", (req, res) => {
  //YS: Try/Catch!

  const { name, email, address, phone } = req.body;
  const newEmploye = {
    name: name,
    email: email,
    address: address,
    phone: phone,
    id: uuidv4(),
  };
  /*YS: Instead of doing this 2 times, you can destructure the body and add the id:
            const newEmployee = { 
                ...req.body,
                id: uuidv4()
            } 
         */

  allEmployes.push(newEmploye);
  fs.writeFileSync("./employes.json", JSON.stringify(allEmployes));
  res.send({
    message: "one person was added",
    allEmployes,
  });
});

// app.put('/updateEmployes/:id', (req, res)=>{   YS: YES! This was better!
//     const {id} = req.params;
//     const {name} = req.body;
//     const employeUpdate = allEmployes.find((employe)=>employe.id === id);
//     if(name)
//     employeUpdate.name = name;
//     res.send(employeUpdate)
// })
// UPDATE TASKS
app.put("/updateEmployes", (req, res) => { //YS: Should pass the ID in params!
  //YS: Try/Catch!
  const { nameEdit, emailEdit, addressEdit, phoneEdit, id } = req.body;
  const employeUpdate = allEmployes.find((employe) => employe.id === id);
  employeUpdate.name = nameEdit; //YS: What if there is no nameEdit? if(nameEdit)  employeUpdate.name = nameEdit;
  employeUpdate.email = emailEdit;
  employeUpdate.address = addressEdit;
  employeUpdate.phone = phoneEdit;
  employeUpdate.id = id;
  console.log(allEmployes);
  res.send(allEmployes);
});

app.delete("/deleteEmployes/:id", (req, res) => {
  let { id } = req.params;

  allEmployes = allEmployes.filter((employe) => employe.id !== id);
  fs.writeFileSync("./employes.json", JSON.stringify(allEmployes));
  res.send({
    message: "one employe record was deleted",
    allEmployes,
  });
  console.log(allEmployes);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
