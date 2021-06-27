x = 34;
function getSecondsInHours(hours) {
    var seconds = hours * 60 * 60;
    return seconds;
}
var currentDate = new Date();
var nextMonth = new Date("1-jul-2021");
console.log(nextMonth - currentDate);
function getDaysByMili(mili) {
    var days = mili / 1000 / 60 / 60 / 24;
    return days;
}
console.log(getDaysByMili(273582518));
var arrowGetDaysByMili = function (mili) {
    var days = mili / 1000 / 60 / 60 / 24;
    return days;
};
console.log(arrowGetDaysByMili(273582518));
