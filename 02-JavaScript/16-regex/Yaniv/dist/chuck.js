console.log("Chuck Norris jokes pool:");
console.log(jokes);
// find a joke starting with "a"
var findJokesStartingWithA = function (chuckJokes) {
    var startsWithA = '^a';
    var startsWithARegEx = new RegExp(startsWithA, 'gmi');
    var searchResults = chuckJokes.filter(function (chuckJoke) { return startsWithARegEx.test(chuckJoke.value); });
    return searchResults;
};
console.log("Chuck Norris jokes starting with the letter \"a\":");
console.log(findJokesStartingWithA(jokes));
// look for jokes with the search term enterd by the user + use the dom for entering the term and showing the jokes
var findJokesbySearchTerm = function (chuckJokes, serachTerm) {
    var startsWithARegEx = new RegExp(serachTerm, 'gmi');
    var searchResults = chuckJokes.filter(function (chuckJoke) { return startsWithARegEx.test(chuckJoke.value); });
    return searchResults;
};
var addToDom = function (searchResults) {
    var JokesContainer = document.querySelector('.results');
    console.log(JokesContainer);
    if (searchResults.length === 0) {
        JokesContainer.innerHTML = 'no results to show';
        return;
    }
    searchResults.forEach(function (chuckJoke) { return JokesContainer.innerHTML += "<div id=\"results results__item\">" + chuckJoke.value + "</div>"; });
};
var handleSubmit = function (ev) {
    try {
        ev.preventDefault();
        var searchTerm = ev.target.elements.searchInJoke.value;
        var results = findJokesbySearchTerm(jokes, searchTerm);
        console.log(results);
        addToDom(results);
        ev.target.reset();
    }
    catch (er) {
        console.error(er);
    }
};
