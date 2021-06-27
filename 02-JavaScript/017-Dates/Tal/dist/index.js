//dates are time objects in js
//current time
var currentDate = new Date();
console.log(currentDate);
//create an object of 1st-July-2021;
var nextMonth = new Date('1-jul-2021');
console.log(nextMonth.getFullYear());
console.log(nextMonth - currentDate);
