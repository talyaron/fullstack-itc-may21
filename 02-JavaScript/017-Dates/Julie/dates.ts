// Creat a function that tells us the difference between two dates in days or hours
const todaysDate: Date = new Date();
console.log(todaysDate);
// This displays today's date.

//create an object of 1st-July-2021;
const julyDate: Date = new Date("1-jul-2021");
console.log(julyDate.getFullYear());

// The console shows negative 2021

const firstDate = new Date("31-oct-1979");
const secondDate = new Date("26-oct-2012");

console.log(firstDate);
console.log(secondDate);

// This shows the two ates, but with a negative year, for some reason.

// Let's find the difference between the two dates in days:
// getTime() method returns the numeric value corresponding to the time for the specified date according to universal time. The value returned by the getTime method is the number of milliseconds since 1 January 1970 00:00:00.
// Math.ceil rounds the number up to the next largest integer.

function differenceInDays(firstDate: Date, secondDate: Date): number {
  const firstDateinMil = firstDate.getTime();
  const secondDateinMil = secondDate.getTime();
  return Math.ceil((secondDateinMil - firstDateinMil) / (1000 * 60 * 60 * 24));
}

// To get it from miliseconds to days, divide it by 100 to get seconds, 60 to get minutes, 60 to get hours, and 24 to get days.

console.log(differenceInDays(firstDate, secondDate));
