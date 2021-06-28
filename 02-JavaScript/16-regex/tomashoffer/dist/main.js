// find a joke startg with "a"
// look for jokes with the search term enterd by the user
// use the dom for entering the term and showing the jokes
function searchJoke(filterArray) {
    var searchReg = new RegExp('^A');
    return filterArray.filter(function (joke) { return searchReg.test(joke.value); });
}
console.log(searchJoke(jokes));
console.log(jokes);
var handleSubmit = function (ev) {
    ev.preventDefault();
    var lookArray = [];
    var search = ev.target.elements.search.value;
    lookArray.push(search);
    var lookJoke = new RegExp('[a-z]+');
    return lookArray.filter(function (joke) { return lookJoke.test(joke.value); });
};
