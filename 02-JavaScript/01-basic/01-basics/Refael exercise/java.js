// //creating a function, give it a value to pass on,
// //than i creat a veriable and set it to a value by talking the
// //first value and manupukatig it
// //after that im talking that value and returning (i can return an equation with setting it to a veriable)
// //it back so i can do something with it but in order
// //for me to use it i need to put it in a variable
// //so im creating a variable and set it to be equle evoking my function

//function that calculates the radius of a number
const calcRaduis = (raduis) => {
  try {
    if (typeof raduis !== "number") throw new Error("this is not a number");
    return 3.14 * raduis ** 2;
  } catch (error) {
    console.log(error);
  }
};
const area = calcRaduis(82);
console.log("your area is:", area);

//function that calculates the mean (average)
const mean = (arr) => {
  try {
    if (!Array.isArray(arr)) throw new Error("this is not an array");
    let sums = 0;
    for (let i of arr) {
      if (typeof i !== "number") throw new Error("the item is not a number");
      sums += i;
    }
    const avg = sums / arr.length;
    return avg;
  } catch (error) {
    console.log(error);
  }
};
let avg = mean([1, 2, 3, 4]);
console.log(avg);

//objact to array

const objectToArray = (object) => {
  try {
    if (typeof object !== "object") throw new Error("this is not an object!");
    for (i in object) {
      console.log(Object.values(object));
      const arrayFromobject = Object.values(object);
      return arrayFromobject;
    }
  } catch (error) {
    console.log(error);
  }
};
const array = objectToArray({
  Refael: "Assor",
  Assor: "Refael",
  status: "good job!",
});
console.log(array);

// function averageArray(arr) {
//   //the solution is for loopp that scroll each elelemnt in the array, then get the total. add to the running total
//   try {
//     if (!Array.isArray(arr)) throw new Error("the argument is not an array");

//     //define  a variable which sums the number
//     let runningTotal = 0;

//     for (let el of arr) {
//       if (typeof el !== "number") throw new Error("an element is not a number");
//       //add them up
//       runningTotal += el;
//     }
//     const avg = runningTotal / arr.length;
//     return avg;
//   } catch (e) {
//     console.error(e);
//     return false;
//   }
// }

// let avg = averageArray("a");

// console.log(avg);
