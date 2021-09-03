



const searchInput = document.querySelector("#searchInput")
searchInput.addEventListener('keyup', async () => {
    const searchTerm = searchInput.value
    const res = await axios.post("/searchBooks", {searchTerm});
    const searchedbooks = res.data
    render(searchedbooks)
});

const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit);

function handleSubmit(ev) {
    ev.preventDefault();
    const title = ev.target.elements.title.value;
    const author = ev.target.elements.author.value;
    console.log(title);
    addBook(title, author)

    ev.target.reset();
}
// async function getAllBooks() {
//     const res = await axios("/getBooks");
//     const allBooks = res.data
//     return allBooks;
// }
// getAllBooks()


async function addBook(title: string, author: string) {
    const res = await axios.post("/addBook", { title, author });
    const allBooks = res.data
    render(allBooks)
}

function render(data) {
    const root = document.querySelector(".root")
    let html = "";
    data.forEach((book) =>
        html += `<div class="card">
        <p class="title">${book.title}</p>
        <p>${book.author}</p>
      </div>`)
    root.innerHTML = html
}


