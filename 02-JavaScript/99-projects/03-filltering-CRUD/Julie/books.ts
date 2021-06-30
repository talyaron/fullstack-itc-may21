// Here, presumably, I need to make these keys accord tp those defined by the class "Book."
// It would be easier to change the class to accord with what is here, rather than change all of these.

// In Avromi/ Tal's code (done in class), instead of taking in a class (i.e. Book), it takes in an interface. What';s with that?

// I've created this array of objects, now I need to add it to the DOM, either using tyhe string/ HTML method, or the nodes method.
// I don't really understand how it's supposed to look. Am I supposed to have this as a page of visible 'book" or just as a database, that I can search through, and then add when I find the right book?

// And I need to add stuff that's not in there books, like date started and date finished, marks out of ten, etc. So the list cannot correspond to what we enter manually.

//

const booksData: Array<any> = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    title: "Things Fall Apart",
    year: 1958,
    bookId: "1",
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    title: "Fairy tales",
    year: 1836,
    bookId: "2",
  },

  {
    author: "Jane Austen",
    country: "United Kingdom",
    title: "Pride and Prejudice",
    year: 1813,
    bookId: "3",
  },

  {
    author: "Samuel Beckett",
    country: "Republic of Ireland",
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    year: 1952,
    bookId: "4",
  },
  {
    author: "Jorge Luis Borges",
    country: "Argentina",
    title: "Ficciones",
    year: 1965,
    bookId: "5",
  },

  {
    author: "Albert Camus",
    country: "Algeria, French Empire",
    title: "The Stranger",
    year: 1942,
    bookId: "6",
  },
  {
    author: "Paul Celan",
    country: "Romania, France",
    title: "Poems",
    year: 1952,
    bookId: "7",
  },

  {
    author: "Miguel de Cervantes",
    country: "Spain",
    title: "Don Quijote De La Mancha",
    year: 1610,
    bookId: "8",
  },
  {
    author: "Geoffrey Chaucer",
    country: "England",
    title: "The Canterbury Tales",
    year: 1450,
    bookId: "9",
  },
  {
    author: "Joseph Conrad",
    country: "United Kingdom",
    title: "Nostromo",
    year: 1904,
    bookId: "10",
  },
];
