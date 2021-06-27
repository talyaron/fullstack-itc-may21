//dates are time objects in js
//current time
var currentDate = new Date();
console.log(currentDate);
//create an object of 1st-July-2021;
var nextMonth = new Date('1-jul-2021');
console.log(nextMonth.getFullYear());
console.log(nextMonth - currentDate);
//the function get two dates and return the diffrence in days
function DiffrenceInDatesInDays(date1, date2) {
    var date1Mili = date1.getTime();
    var date2Mili = date2.getTime();
    return Math.ceil((date1Mili - date2Mili) / (1000 * 60 * 60 * 24) * 100) / 100;
}
console.log(DiffrenceInDatesInDays(currentDate, nextMonth));
