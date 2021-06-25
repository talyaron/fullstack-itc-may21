


function searchJokes(term: string, jokeArr: Array<any>): any {
    const searchTermReg: RegExp = new RegExp(term, '\\w');

    return  jokeArr.filter(joke =>  searchTermReg.test(joke.value) )

}



console.log(searchJokes('a', jokes));