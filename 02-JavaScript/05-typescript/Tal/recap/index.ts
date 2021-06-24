interface Cat {
    name: string,
    age: number
}
interface Dog {
    bark: string
}

const cats: Array<Cat> = [{ name: 'mitzi', age: 2 }, { name: 'mitzi', age: 3 }, { name: 'Joni', age: 5 }];
console.log(cats)

let myFavouriteCats: Array<Cat> = cats.filter(cat => cat.name === 'mitzi');
console.log(myFavouriteCats);



//DOM elements;