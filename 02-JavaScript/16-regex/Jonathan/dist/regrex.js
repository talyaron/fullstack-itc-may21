var boardRoot = document.querySelector('#board');
console.log('jokes:');
console.log(jokes);
function searchJokes(jokesArr) {
    var validationReg = /^A/gi;
    return jokesArr.filter(function (jokes) { return validationReg.test(jokes.value); });
}
console.log('jokes starting with A:', searchJokes(jokes));
function searchJokesInput(text, jokesArr) {
    var regrExp = "^" + text; //regular expression comience con A
    var searchTermReg = new RegExp(regrExp, 'i');
    return jokesArr.filter(function (jokes) { return searchTermReg.test(jokes.value); });
}
function renderJokesInput(jokesInput) {
    var html = "";
    var count = 0;
    jokesInput.forEach(function (joke) {
        html += "<p><span>" + count + "- </span>" + joke.value + "</p>";
        count++;
    });
    boardRoot.innerHTML = html;
}
function handlePera(event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var jokesInput = searchJokesInput(name, jokes);
    renderJokesInput(jokesInput);
}
