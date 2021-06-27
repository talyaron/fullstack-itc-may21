console.log(jokes);
//find a joke starting with "a"
function startWithA(jokes) {
    var startARegex = /^a/gim;
    jokes.forEach(function (element) {
        if (startARegex.test(element.value)) {
            console.log("Expresion starting with \"a\": " + element.value);
        }
    });
}
startWithA(jokes);
//look for jokes with the search term enter by the user
//use the dom for entering the term and showing the jokes
function checkEnterByUser(jokes, searchTerm) {
    var searchTermReg = new RegExp(searchTerm, 'gmi');
    console.log(searchTermReg);
    var newSearch = "/^" + searchTerm + "/";
    var pepe = jokes.filter(function (joke) { return searchTermReg.test(joke.value); });
    return pepe;
}
var addToDom = function (searchResults) {
    var JokesContainer = document.querySelector('.results');
    JokesContainer.innerHTML = "";
    if (searchResults.length === 0) {
        JokesContainer.innerHTML = 'no results to show';
        return;
    }
    searchResults.forEach(function (chuckJoke) { return JokesContainer.innerHTML += "<div class=\"results results__item\">" + chuckJoke.value + "</div>"; });
};
var handleForm = function (ev) {
    ev.preventDefault();
    var search = ev.target.elements.search.value;
    var results = checkEnterByUser(jokes, search);
    addToDom(results);
    ev.target.reset();
};
