//we can use function to give words to our solutions

function getSecondsInHour(hours:number):number{

    let seconds = hours*60*60;

    return seconds;
}

console.log(getSecondsInHour(48));