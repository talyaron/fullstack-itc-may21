// Creat a function that tells us the difference between two dates in days or hours
var firstDate = new Date("31-oct-1979");
var secondDate = new Date("26-oct-2012");
function timeDifference(firstDate, secondDate) {
    return Math.abs(secondDate, Date - firstDate, Date);
}
console.log(timeDifference);
function differenceInDays(firstDate, secondDate) {
    var firstDateinMil = firstDate.getTime();
    var secondDateinMil = secondDate.getTime();
    return Math.ceil(secondDateinMil - firstDateinMil / (1000 * 60 * 60 * 24));
}
console.log(differenceinDays(secondDate, firstDate));
