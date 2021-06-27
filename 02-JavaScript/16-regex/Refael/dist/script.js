// function checkInput(searchTerm: string): boolean {
//   const searchTermReg: RegExp = new RegExp(searchTerm, "i");
//   return searchTermReg.test(text);
// }
// console.log(checkInput("Programme", jokes));
console.log("hi");
function searchjokes(term, jokesArr) {
    var searchTermReg = new RegExp(term, "i");
    return jokesArr.filter(function (jokes) { return searchTermReg.test(jokes.value); });
    var jokes = jokesArr;
    jokes = document.querySelector(".container").innerHTML;
}
console.log(searchjokes("a", jokes));
