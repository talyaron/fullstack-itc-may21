interface Movie {
    title:string
    rating:number
    hasWatched: boolean
}

let movies:Array<Movie> = [
  {
    title: "Heathers",
    rating: 4.5,
    hasWatched: true,
  },
  {
    title: "Europa Report",
    rating: 2.5,
    hasWatched: false,
  },
  {
    title: "Fellowship of the Ring",
    rating: 5,
    hasWatched: true,
  },
  {
    title: "Silver Linings Playbook",
    rating: 5,
    hasWatched: true,
  },
];

const root:HTMLElement = document.querySelector("#root");
movies = movies.sort()
movies = Object.assign(movies)
console.log(movies);

root.innerHTML = movies

console.log(root);
