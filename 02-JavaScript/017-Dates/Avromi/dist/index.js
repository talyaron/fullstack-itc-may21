function getSecondsInHours(hours) {
    var seconds = hours * 60 * 60;
    return seconds;
}
var currentDate = new Date();
var nextMonth = new Date("1-jul-2021");
// console.log(nextMonth-currentDate);
function getDaysByMili(mili) {
    var days = mili / 1000 / 60 / 60 / 24;
    return days;
}
// console.log(getDaysByMili(273582518));
var arrowGetDaysByMili = function (mili) {
    var days = mili / 1000 / 60 / 60 / 24;
    return days;
};
// console.log(arrowGetDaysByMili(273582518));
function differenceInDaysByDay(day1, day2) {
    var day1mili = day1.getTime();
    var day2mili = day2.getTime();
    return Math.ceil((day1mili - day2mili) / (1000 * 60 * 60 * 24) * 1000) / 1000;
}
console.log(differenceInDaysByDay(nextMonth, currentDate));
