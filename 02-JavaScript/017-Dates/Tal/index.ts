//dates are time objects in js

//current time
const currentDate:Date = new Date();
console.log(currentDate)

//create an object of 1st-July-2021;
const nextMonth:Date = new Date('1-jul-2021');
console.log(nextMonth.getFullYear())

console.log(nextMonth-currentDate);


//the functio get two dates and return the diffrence in days
