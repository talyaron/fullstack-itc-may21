function searchJokes(term, jokeArr) {
    var searchTermReg = new RegExp(term, '\\w');
    return jokeArr.filter(function (joke) { return searchTermReg.test(joke.value); });
}
console.log(searchJokes('a', jokes));
