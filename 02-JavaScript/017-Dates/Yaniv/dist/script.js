//dates are time objects in js
//current time
var currentDate = new Date();
console.log(currentDate);
//create an object of 1st-July-2021;
var nextMonth = new Date('28-jun-2021');
console.log(nextMonth.getFullYear());
console.log(nextMonth - currentDate);
var diffInDays = function (date1, date2) {
    var diff = Math.round(Math.abs(Number(date1) - Number(date2)) / (1000 * 60 * 60 * 24) * 10) / 10;
    return diff;
};
console.log("the difference in days is " + diffInDays(nextMonth, currentDate));
