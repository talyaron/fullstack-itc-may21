/* 70 points:
Create an app for searching books


In the client create an input form with the book title and author. 

post the book info to the server

also create a search form, for the author or book title
using regexp, the server, should look for the book title or the author and return matched books


render the results to the screen


5 points: validation
5 point: put the validation in middleware
5 points: save specific user info in JWT cookie/bearer
5: design patterns: (model, routes, controllers)
5 points: use classes
5 point: use typescript */

//Function to add a new book
const createBook = document.querySelector('#formNewBook');
createBook.addEventListener('submit', newBook);

async function newBook(ev) {
    try {
        ev.preventDefault();
        let { bookname, author, year } = ev.target.elements;
        bookname = bookname.value;
        author = author.value;
        year = year.valueAsNumber;


        if (!bookname || !author || !year) throw new Error("Please complete all the fields");
        ev.target.reset();

        const bookDetails = { bookname, author, year };
        const booksInfo = await axios.post(`/books/newBook/`, bookDetails);
        if (booksInfo) {
            swal("Good job!", booksInfo.data.message, "success");
            const { books } = booksInfo.data.allBooks;
            renderBooks(books);
        }
    } catch (error) {
        swal("Ohhh no!", error.response.data, "warning");
        console.error(error);
    }
}

async function renderBooks(booksToShow) {
    try {
        const root: HTMLElement = document.querySelector('#root');
        root.classList.remove('error__message')
        let html: any = '';

        if (!booksToShow) {
            const booksInfo = await axios.get(`/books/allBooks`);
            const { books } = booksInfo.data.allBooks;
            booksToShow = books;
        }

        html = booksToShow.map(element => {
            return (
                `<div class="product__item__wrapper">
                    <div>Book name: <b>${element.bookname} </b></div>
                    <div>Author: <b>${element.author} </b></div>
                    <div>Year: <b>${element.year} </b></div>
                    <div class="product__item__options" id="editArea">
                    <i class="fas fa-trash-alt button--pointer" onclick="deleteBook('${element.uuid}', '${element.bookname}')"></i>
                    <i class="fas fa-edit button--pointer" onclick="editBook('${element.uuid}', '${element.bookname}', '${element.author}', '${element.year}')"></i>
                    </div>
                </div>`
            )
        }).join('');

        root.innerHTML = html;

        if (!html) {
            root.innerHTML = 'Book or Author not found';
            root.classList.add('error__message')
        };

    } catch (error) {
        swal("Ohhh no!", error.response.data, "warning");
        console.error(error);
    }
}

function deleteBook(bookId, bookname) {
    try {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover ${bookname}!`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteItem(bookId);
                } else {
                    swal("Your book is safe!");
                }
            });
    } catch (error) {
        console.error(error);
    }
}

async function deleteItem(id) {
    try {
        const booksInfo = await axios.delete(`/books/deleteBook/${id}`);
        const { books } = booksInfo.data.allBooks;
        renderBooks(books);
    } catch (error) {
        console.error(error);
    }
}

//Id to handle the edit
let bookId;

function editBook(id, bookname, author, year) {
    try {
        if (!modalUpload) throw new Error('There is a problem finding modalEdit from HTML');
        modalUpload.style.display = "block";
        modalUpload.classList.add("showModal");

        const formEdit = document.querySelector("#formEdit");
        if (!formEdit) throw new Error('There is a problem finding form from HTML');
        let html = `
        <h1> Edit book </h1>

            <div class="form__wrapper wrapper__register">
                <label for="bookname">Bookname:</label>
                <input type="text" name="bookname" placeholder="Enter your book name" value="${bookname}" maxlength="50" required>
            </div>

            <div class="form__wrapper wrapper__register">
                <label for="text">Author:</label>
                <input type="text" name="author" placeholder="Enter the author" value="${author}" maxlength="50" required>
            </div>

            <div class="form__wrapper wrapper__register">
                <label for="year">Year of the book:</label>
                <input type="number" name="year" placeholder="Enter the year of the book" value="${year}" min="1900" max="2021">
            </div>
            
            <input class="form__submit--newuser" type="submit" value="Update book">`;
        bookId = id;
        formEdit.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

//Handle Edit
async function handleEdit(ev) {
    try {
        let { bookname, author, year } = ev.target.elements;
        bookname = bookname.value;
        author = author.value;
        year = year.valueAsNumber;

        if (!bookname || !author || !year)
            throw new Error("You need to complete all the fields");

        const bookDetails = { bookname, author, year };

        if (!modalUpload) throw new Error('There is a problem finding modalEdit from HTML');
        modalUpload.style.display = "none";
        ev.target.reset();
        const booksInfo = await axios.put(`/books/updateBook/${bookId}`, bookDetails);
        const { books } = booksInfo.data.allBooks;
        renderBooks(books);
    } catch (error) {
        swal("Ohhh no!", `${error}`, "warning");
        console.error(error);
    };
};

//Function to do a filter in the search input
async function handleSearch() {
    try {
        const searchBook: any = document.querySelector('#search');
        const regEx: string = searchBook.value;
        if (regEx) {
            const foundBook = await axios.post(`/books/searchBook/${regEx}`);
            renderBooks(foundBook.data.foundBook);
        } else {
            renderBooks(null);
        }
    } catch (error) {
        console.error(error);
    };
};