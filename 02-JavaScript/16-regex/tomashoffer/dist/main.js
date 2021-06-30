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
var inputSearch = document.getElementById("inpSearch");
searchRegEx(inputSearch, string);
{
    var regExp = "^" + inputSearch;
    var searchTermReg_1 = new RegExp(regExp, 'i');
    var filterSearch = list.filter(function (elem) { return searchTermReg_1.test(elem.product); });
    renderData(filterSearch);
}
inputSearch.addEventListener('keyup', handleKeyUp);
function handleKeyUp() {
    try {
        list.filterbyName(inputSearch.value);
    }
    catch (e) {
        console.log(e);
    }
}
function filterbyName(inputSearch) {
    var regrExp = "^" + inputSearch;
    var searchTermReg = new RegExp(regrExp, 'i');
    this.datalist = list.filter(function (elem) { return searchTermReg.test(elem.product); });
    renderData();
}
