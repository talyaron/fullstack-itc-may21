let movies = [
  { title: "first", rating: 3, hasWatched: true },
  { title: "second", rating: 5, hasWatched: false },
  { title: "third", rating: 4, hasWatched: true },
  { title: "fourth", rating: 2, hasWatched: true },
  { title: "first", rating: 1, hasWatched: true },
  { title: "fourth", rating: 5, hasWatched: true },
  { title: "third", rating: 3, hasWatched: true }
];

//Find all objects with the name "third"
//Remove them from array

// movies

function getAllIndexes(arr: string | any[], val: string) {
    let indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

let newArray = getAllIndexes(movies, "third")
console.log(newArray)

