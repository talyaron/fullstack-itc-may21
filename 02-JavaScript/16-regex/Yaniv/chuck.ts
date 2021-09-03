console.log(`Chuck Norris jokes pool:`);
console.log(jokes);

// find a joke starting with "a"

const findJokesStartingWithA = (chuckJokes: Array<any>) => {
    const startsWithA: string = '^a';
    const startsWithARegEx = new RegExp(startsWithA,'gmi');

    const searchResults: Array<any> = chuckJokes.filter(chuckJoke => startsWithARegEx.test(chuckJoke.value));
    return searchResults;
}

console.log(`Chuck Norris jokes starting with the letter "a":`);
console.log(findJokesStartingWithA(jokes));

// look for jokes with the search term enterd by the user + use the dom for entering the term and showing the jokes

const findJokesbySearchTerm = (chuckJokes: Array<any>, serachTerm: string) => {
    const termRegEx = new RegExp(serachTerm,'gmi');

    const searchResults: Array<any> = chuckJokes.filter(chuckJoke => termRegEx.test(chuckJoke.value));
    return searchResults;
}

const addToDom = (searchResults: Array<any>) => {
    const JokesContainer: HTMLElement = document.querySelector('.results');
    JokesContainer.innerHTML = ``;
    if (searchResults.length === 0) {JokesContainer.innerHTML = 'no results to show';return;}
    searchResults.forEach(chuckJoke => JokesContainer.innerHTML += `<div class="results results__item">${chuckJoke.value}</div>`)

}

const handleSubmit = (ev: any) => {
    try {  
        ev.preventDefault();

        const searchTerm: string = ev.target.elements.searchInJoke.value;
        const results = findJokesbySearchTerm(jokes,searchTerm);
        addToDom(results);

        ev.target.reset();
    } catch (er) {
        console.error(er)
    }
}

const handleKeyUp = (ev: any) => {
    try {  
        ev.preventDefault();

        const searchTerm: string = ev.target.value;
        const results = findJokesbySearchTerm(jokes,searchTerm);
        addToDom(results);

    } catch (er) {
        console.error(er)
    }
}