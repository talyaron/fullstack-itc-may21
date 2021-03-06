"use strict";

/*You should have a list of tasks
create a task
update a task (done/not done/ update text)
delete a task

make it responsive, and look and feel of KEEP

//optional
order tasks*/
var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

var _require = require('uuid'),
    uuidv4 = _require.v4;

var fs = require('fs');

app.use(express["static"]('public'));
app.use(express.json());

var readAllEmployes = function readAllEmployes() {
  var allEmployes = fs.readFileSync('./employes.json');
  return JSON.parse(allEmployes);
};

var allEmployes = readAllEmployes();
app.get('/getEmployes', function (req, res) {
  res.send(allEmployes);
});
app.post('/addEmployes', function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      address = _req$body.address,
      phone = _req$body.phone;
  var newEmploye = {
    name: name,
    email: email,
    address: address,
    phone: phone,
    id: uuidv4()
  };
  allEmployes.push(newEmploye);
  fs.writeFileSync('./employes.json', JSON.stringify(allEmployes));
  res.send({
    message: 'one person was added',
    allEmployes: allEmployes
  });
}); // app.put('/updateEmployes/:id', (req, res)=>{
//     const {id} = req.params;
//     const {name} = req.body;
//     const employeUpdate = allEmployes.find((employe)=>employe.id === id);
//     if(name)
//     employeUpdate.name = name;
//     res.send(employeUpdate)
// })
// UPDATE TASKS

app.put('/updateEmployes', function (req, res) {
  var _req$body2 = req.body,
      nameEdit = _req$body2.nameEdit,
      emailEdit = _req$body2.emailEdit,
      addressEdit = _req$body2.addressEdit,
      phoneEdit = _req$body2.phoneEdit,
      id = _req$body2.id;
  var employeUpdate = allEmployes.find(function (employe) {
    return employe.id === id;
  });
  employeUpdate.name = nameEdit;
  employeUpdate.email = emailEdit;
  employeUpdate.address = addressEdit;
  employeUpdate.phone = phoneEdit;
  employeUpdate.id = id;
  console.log(allEmployes);
  res.send(allEmployes);
});
app["delete"]('/deleteEmployes/:id', function (req, res) {
  var id = req.params.id;
  allEmployes = allEmployes.filter(function (employe) {
    return employe.id !== id;
  });
  fs.writeFileSync("./employes.json", JSON.stringify(allEmployes));
  res.send({
    message: 'one employe record was deleted',
    allEmployes: allEmployes
  });
  console.log(allEmployes);
});
app.listen(port, function () {
  console.log("Server listening at http://localhost:".concat(port));
});