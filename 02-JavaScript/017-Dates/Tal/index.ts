//dates are time objects in js

//current time
const currentDate: Date = new Date();
console.log(currentDate)

//create an object of 1st-July-2021;
const nextMonth: Date = new Date('1-jul-2021');
console.log(nextMonth.getFullYear())

console.log(nextMonth - currentDate);


//the function get two dates and return the diffrence in days

function DiffrenceInDatesInDays(date1: Date, date2: Date): number {

    const date1Mili = date1.getTime();
    const date2Mili = date2.getTime();

    

    return Math.ceil((date1Mili - date2Mili)/(1000*60*60*24)*100)/100
}

console.log(DiffrenceInDatesInDays(currentDate, nextMonth));
