type Book = {
    id: string;
    name: string;
    author: string;
};

const requestCookie = async (event) => {
    const { data, error } = await axios.get('books/allBooks');
}


const getAllBooks = async () => {
    try {
        const { data, error } = await axios('books/allBooks');
        const { books } = data
        renderBooks(books)
    } catch (error) {
        console.error(error);
    }
}

const addBook = async (event) => {
    try {
        event.preventDefault()
        const name: string = event.target.elements[0].value
        const author: string = event.target.elements[1].value
        if (!name || !author) throw new Error('Missing input')
        const { data, error } = await axios.post('/books/addBook', { name, author })
        if (error) throw error;
        const { books } = data;
        event.target.reset();
        renderBooks(books)
    } catch (error) {
        console.error(error);
    }
};

const renderBooks = (books: Book[]) => {
    try {
        const booksWrapper: HTMLElement = document.querySelector('.booksWrapper')
        let htmlPattern: string = ''
        books.forEach(b => {
            htmlPattern +=
                `<div class="book" id="${b.id}">
                <h3 class="book__name">${b.name}</h3>
                <h4 class="book__author">By ${b.author}</h4>
                </div>
            `
        });
        booksWrapper.innerHTML = htmlPattern
    } catch (error) {
    }
}


const handleSearch = async (event) => {
    try {
        const searchBar: HTMLFormElement = document.querySelector('#search');
        if (!searchBar) throw new Error('Can`t access the searchbar');
        const search: string = searchBar.value;
        const { data, error } = await axios.post('/books/searchBooks', { search })
        const { results } = data
        if (results.length === 0) {
            const booksWrapper = document.querySelector('.booksWrapper')
            let html: string = `<h2 class="not-found-message">No books or authors found with the term "${search}".</h2>`;
            booksWrapper.innerHTML = html;
        } else {
            renderBooks(results)
        }
    } catch (error) {
        console.error(error);
    };
};