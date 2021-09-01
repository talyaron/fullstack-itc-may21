"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function Student(name) {
  _classCallCheck(this, Student);

  this.id = Math.random().toString(16);
  this.name = name;
};

var Students = function Students() {
  _classCallCheck(this, Students);
};

exports.drinks = [{
  name: "Kola",
  src: 'https://cdn-img.globalrustrade.com/i/k/kekCBeVWG2/2420.jpg'
}, {
  name: "Mate",
  src: 'https://post.healthline.com/wp-content/uploads/2019/09/Yerba_Mate_732x549-thumbnail.jpg'
}];