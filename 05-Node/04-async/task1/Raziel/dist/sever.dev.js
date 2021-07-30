"use strict";

var express = require("express");

app = express();
var port = process.env.PORT || 4000;
var drinks = [{
  name: 'cola',
  src: "https://citymarteg.com/image/cache/catalog/cat/Drinks/soda/coca-cola-bottle-330-ml-1000x1000.jpg"
}];
app.use(express.json());
app.use(express["static"]('public'));
app.get('/getData', function (req, res) {
  res.send(drinks);
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});