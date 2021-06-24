var cats = [{ name: 'mitzi', age: 2 }, { name: 'mitzi', age: 3 }, { name: 'Joni', age: 5 }];
console.log(cats);
var myFavouriteCats = cats.filter(function (cat) { return cat.name === 'mitzi'; });
console.log(myFavouriteCats);
//DOM elements;
