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

const inputSearch = document.getElementById("inpSearch");

searchRegEx(inputSearch: string) {

    const regExp: string = `^${inputSearch}`
    const searchTermReg: RegExp = new RegExp(regExp, 'i');
    const filterSearch = list.filter(elem => searchTermReg.test(elem.product))
    renderData(filterSearch);

}
inputSearch.addEventListener('keyup', handleKeyUp)

function handleKeyUp() {
    try {
        list.filterbyName(inputSearch.value)
    } catch (e) {
        console.log(e)
    }
}

function filterbyName(inputSearch: string) {

    const regrExp: string = `^${inputSearch}`
    const searchTermReg: RegExp = new RegExp(regrExp, 'i');
    this.datalist = list.filter(elem => searchTermReg.test(elem.product))
    renderData()

}

