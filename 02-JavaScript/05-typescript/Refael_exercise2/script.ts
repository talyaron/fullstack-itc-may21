// 2nd exercise:
// create 3 persons with their B-days (in object {name, day-of-birth})
// calculate how old are they.

interface bdays {
  name: string;
  yearOfBirth: number;
}
var person1: bdays = {
  name: "moshe",
  yearOfBirth: 1956,
};
var person2: bdays = {
  name: "shimon",
  yearOfBirth: 1874,
};
var person3: bdays = {
  name: "yaakov",
  yearOfBirth: 1420,
};

var HowOld = (person: bdays): number => {
  const currentYear: number = new Date().getFullYear();
  const year: number = person.yearOfBirth;
  const age: number = currentYear - year;
  return age;
};

console.log(`${person1.name}, your age is:${HowOld(person1)}`);
console.log(`${person2.name}, your age is:${HowOld(person2)}`);
console.log(`${person3.name}, your age is:${HowOld(person3)}`);
