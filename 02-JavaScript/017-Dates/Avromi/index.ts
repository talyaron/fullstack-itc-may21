x = 34;

function getSecondsInHours(hours:number):number{
   let seconds = hours*60*60;
   
    return seconds;
}


const currentDate:Date = new Date();
const nextMonth:Date = new Date(`1-jul-2021`;
console.log(nextMonth-currentDate);

function getDaysByMili(mili:number):number{
    let days = mili/1000/60/60/24
    return days;
}
console.log(getDaysByMili(273582518));

const arrowGetDaysByMili =(mili:number):number=>{
    let days = mili/1000/60/60/24
    return days;
}
console.log(arrowGetDaysByMili(273582518));