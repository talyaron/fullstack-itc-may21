"use strict";

// jshint esversion:6
var express = require("express");

var app = express();
app.use(express.json());
app.use(express["static"]("public")); // app.use is a way to register middlewrae before implementing routes
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

var fs = require("fs"); // This one you don't have to install bc it is included in node.


var listOfThings = ["running", "piano", "Japanese", "pilates"]; // Eventually, this array will be taking in items from the form.

app.get("/", function (req, res) {
  // This is jujst a route ()
  console.log("this is the get to home");
  res.send("this is the get TO HOME");
}); // This shows the html file

app.get("/users", function (req, res) {
  // This is anpther route ()
  console.log("this is the get to users");
  res.send("this is the get TO USERS");
});
app.post("/", function (req, res) {
  console.log("this is the post to home");
  res.send("This is the post TO HOME"); //   The message is showing after I try to post something but in the console it is showing as undefined. Get it to add to the list using a string literal? Want to push the item to the array above.
  //   Presumably instead of the message here you have to send the req.body.thing?
});
app.listen(4040, function () {
  console.log("crudnode is running on the server");
}); // what's the difference between this and using const PORT = process.env.PORT || 4040;? Even if you use the latter, you user server.listen. What's the difference?
// JSON