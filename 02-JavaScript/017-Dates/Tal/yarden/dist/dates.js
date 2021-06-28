function difference(date1, date2) {
    try {
        var differenceTime = Math.abs(date2 - date1);
        var differenceDays = Math.ceil(differenceTime / (1000 * 60 * 60 * 24));
        var days = ("The difference is " + differenceDays + " days");
        return days;
    }
    catch (error) {
    }
}
var chosenDate1 = new Date('01-aug-2021');
var chosenDate2 = new Date('11-sep-2022');
console.log(difference(chosenDate1, chosenDate2));
var root = document.querySelector('.root');
root.innerHTML += difference(chosenDate1, chosenDate2);
