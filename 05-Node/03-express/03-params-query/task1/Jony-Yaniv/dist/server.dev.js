"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public'));
app.post('/', function (req, res) {
  var color = req.body.color;
  res.send(color);
});
app.listen(port, function () {
  console.log("listening on port ".concat(port, "..."));
}); // function pickedColor() {
//     try {
//       let residents = [];
//       function personalWelcome(resident: string): Array<string> | string {
//         try {
//           if (resident === "l") return residents;
//           residents.push(resident);
//           return `Welcome ${resident}, you are resident number ${residents.length}`;
//         } catch (error) {
//           console.error(error);
//         }
//       }
//       return personalWelcome;
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   const userColorPick = pickedColor();
//   function handleUserColorPick(ev) {
//     try {
//       ev.preventDefault();
//       const color = ev.target.elements.resident.value;
//       console.log(userColorPick(resident));
//       ev.target.reset();
//     } catch (error) {
//       console.error(error);
//     }
//   }