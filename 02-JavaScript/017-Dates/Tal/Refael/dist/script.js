//calculate
var firstDate = new Date();
var secondDate = new Date("1-jun-2020");
var datesToDays = function (firstDate, secondDate) {
    console.log(firstDate, secondDate);
    var date1 = firstDate.getTime();
    var date2 = secondDate.getTime();
    var difference = Math.ceil((date1 - date2) / (1000 * 60 * 60 * 24));
    return difference;
};
console.log(datesToDays(firstDate, secondDate));
var difference = datesToDays(firstDate, secondDate);
var DATE = document.querySelector(".print");
DATE.innerHTML = difference;
