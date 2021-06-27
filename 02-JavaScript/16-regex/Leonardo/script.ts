console.log(jokes);

//find a joke starting with "a"
function startWithA(jokes): any {
    const startARegex = /^a/gim
    jokes.forEach(element => {
        if (startARegex.test(element.value)) {
            console.log(`Expresion starting with "a": ${element.value}`);
        }
    }
    );
}

startWithA(jokes);

//look for jokes with the search term enter by the user
//use the dom for entering the term and showing the jokes
function checkEnterByUser(jokes, searchTerm: string) {
    const searchTermReg: RegExp = new RegExp(searchTerm, 'gmi');
    let pepe =  jokes.filter(joke => searchTermReg.test(joke.value))
    return pepe
}

const addToDom = (searchResults: Array<any>) => {
    const JokesContainer: HTMLElement = document.querySelector('.results');
    JokesContainer.innerHTML = ``;
    if (searchResults.length === 0) {JokesContainer.innerHTML = 'no results to show';return;}
    searchResults.forEach(chuckJoke => JokesContainer.innerHTML += `<div class="results results__item">${chuckJoke.value}</div>`)

}

const handleForm = (ev) => {
    ev.preventDefault();
    const search = ev.target.elements.search.value;
    const results = checkEnterByUser(jokes,search);
    addToDom(results);
    ev.target.reset();
}

