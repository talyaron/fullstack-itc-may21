var currentDate = new Date();
var nextMonth = new Date('1-jul-2021');
function differentDays(dateHigher, dateLower) {
    var seconds1 = dateHigher.getTime() / 1000;
    var seconds2 = dateLower.getTime() / 1000;
    var difference = seconds1 - seconds2;
    return difference / 86400;
}
console.log(differentDays(nextMonth, currentDate));
