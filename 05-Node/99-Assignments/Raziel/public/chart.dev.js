"use strict";

// SELECT CHART ELEMENT
var chart = document.querySelector(".chart"); // CREATE CANVAS ELEMMENT

var canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50; // APPEND CANVAS TO CHART ELEMENT

chart.appendChild(canvas); // TO DRAW ON CANVAS, WE NEED TO GET CONTEXT OF CANVAS

var ctx = canvas.getContext("2d"); // CHANGE THE LINE WIDTH

ctx.lineWidth = 8; // CIRCLE RADIUS

var R = 20;

function drawCircle(color, ratio, anticlockwise) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, R, 0, ratio * 2 * Math.PI, anticlockwise);
  ctx.stroke();
}

function updateChart(income, outcome) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var ratio = income / (income + outcome);
  drawCircle("#FFFFFF", -ratio, true);
  drawCircle("#F0624D", 1 - ratio, false);
}