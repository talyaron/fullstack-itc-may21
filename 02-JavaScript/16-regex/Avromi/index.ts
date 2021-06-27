// find a joke startg with "a"

// look for jokes with the search term enterd by the user

// use the dom for entering the term and showing the jokes

console.log(jokes)



function searchJokes(searchTermReg, jokesArr: Array<any>): any {
    const searchTermReg =  /a^abc/gi

    return  jokesArr.filter(book =>  searchTermReg.test(book.title) )

   
}

console.log(searchJokes('Programme', books));