
const currentDate:Date = new Date();
const nextMonth:Date = new Date('1-jul-2021');








function differentDays(dateHigher:Date, dateLower:Date){
    const seconds1 = dateHigher.getTime() / 1000;
    const seconds2 = dateLower.getTime() / 1000;
    const difference = seconds1 - seconds2;
    return difference/86400
}
console.log(differentDays(nextMonth, currentDate));
