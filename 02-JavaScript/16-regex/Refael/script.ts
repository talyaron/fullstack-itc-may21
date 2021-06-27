// function checkInput(searchTerm: string): boolean {
//   const searchTermReg: RegExp = new RegExp(searchTerm, "i");

//   return searchTermReg.test(text);
// }
// console.log(checkInput("Programme", jokes));
console.log("hi");
function searchjokes(term: any, jokesArr: Array<any>): any {
  const searchTermReg: RegExp = new RegExp(term, "i");

  return jokesArr.filter((jokes) => searchTermReg.test(jokes.value));
  let jokes = jokesArr;
  jokes = document.querySelector(".container").innerHTML;
}
console.log(searchjokes("a", jokes));
