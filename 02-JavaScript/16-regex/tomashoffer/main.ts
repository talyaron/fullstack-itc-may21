// find a joke startg with "a"

// look for jokes with the search term enterd by the user

// use the dom for entering the term and showing the jokes


function searchJoke(filterArray:Array<any>){
    const searchReg: RegExp = new RegExp('^A');
    return filterArray.filter(joke=> searchReg.test(joke.value))
    
}

console.log(searchJoke(jokes));
console.log(jokes)

const handleSubmit = (ev) => {
    ev.preventDefault();
    let lookArray: Array<any> = [];
    const search:string= ev.target.elements.search.value;
    lookArray.push(search);

    let lookJoke: RegExp = new RegExp('[a-z]+');
    return lookArray.filter(joke=> lookJoke.test(joke.value))
}


