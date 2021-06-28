let date1 = new Date();
let date2 = new Date('01-Jul-2021')

function showTime(millisec) {

    let seconds = (millisec / 1000).toFixed(1);

    let minutes = (millisec / (1000 * 60)).toFixed(1);

    let hours = (millisec / (1000 * 60 * 60)).toFixed(1);

    let days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

    if (seconds < 60) {
        return seconds + " Seconds";
    } else if (minutes < 60) {
        return minutes + " Minutes";
    } else if (hours < 24) {
        return hours + " Hours";
    } else {
        return days + " Days"
    }
}

console.log(showTime(date2 - date1))
