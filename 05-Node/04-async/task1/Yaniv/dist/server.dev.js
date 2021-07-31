"use strict";

var express = require('express');

app = express();
var port = process.env.PORT || 3000;
var beverages = [{
  name: 'Coke',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbexMOiTYduj25wTNIAh_cuLip_uzXuCiQ2SChiJ8epwDzYvo26fIrJhxofELeEZQFdtk&usqp=CAU'
}, {
  name: 'Orange juice',
  img: 'https://i0.wp.com/www.eatthis.com/wp-content/uploads/2020/08/orange-juice-glass.jpg?fit=1200%2C879&ssl=1'
}];
app.use(express.json());
app.use(express["static"]('public'));
app.get('/getBeverages', function (req, res) {
  res.send(beverages);
});
app.listen(port, function () {
  console.log("listening on port ".concat(port, "..."));
});