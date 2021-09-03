async function handleBookSubmit(ev) {
    try {
        ev.preventDefault()
        const bookName: string = ev.target.children.bookname.value
        const author: string = ev.target.children.author.value
        const result: Array<any> = await axios.post("/books/addBook", {
            bookName: bookName,
            author: author
        })
        if (result.data.token) {
            localStorage.setItem('token', JSON.stringify(result.data.token));
        }
        const bookArray: Array<any> = result.data.bookarray.books
        await renderBooks(bookArray)
        alert("Book Added & Token Created Succesfully!")
        ev.target.reset()
    }
    catch (er) {
        console.error(er)
    }
}

const form = document.querySelector(".my-form")
form.addEventListener("submit", handleBookSubmit)

async function renderBooks(bookarray) {
    try {
        let html: string = ''
        const bookHolder: Element = document.querySelector(".holder")
        bookarray.map(books => {

            html += `<div class="holder__book-card" id="${books.bookID}">
                <label class="title">Book Title:</label>
                <input class="holder__book-card__name" value="${books.name}" id="${books.bookID}name">
                <label>Author:</label>
                <input class="holder__book-card__author" value="${books.author}" id="${books.bookID}author">
                <button class='holder__book-card__update' onclick='updateBook("${books.bookID}")'>Update</button>
                <button class="holder__book-card__delete" onclick="deleteBook('${books.bookID}')">Delete</button>
                </div>`
        })
        bookHolder.innerHTML = html
    }
    catch (er) {
        console.error(er)
    }
}
async function displayBooksOnLoad() {
    try {
        const result: Array<any> = await axios.get("/books/getAllBooks")
        if (result.data.books) {
            renderBooks(result.data.books)
        }
    }
    catch (er) {
        console.error(er)
    }
}
window.addEventListener("load", displayBooksOnLoad)



async function searchTitleKeyUp(ev: any) {
    try {
        ev.preventDefault();
        const searchTerm: string = ev.target.value;
        const results: Array<any> = await axios.post("/books/searchBookTitle", {
            searchTerm: searchTerm
        })
        await renderBooks(results.data)
    }
    catch (er) {
        console.error(er)
    }
}
document.getElementById("searching-title").addEventListener("keyup", searchTitleKeyUp)

async function searchAuthorKeyUp(ev: any) {
    try {
        ev.preventDefault();
        const searchTerm: string = ev.target.value;
        const results: Array<any> = await axios.post("/books/searchBookAuthor", {
            searchTerm: searchTerm
        })
        await renderBooks(results.data)
    }
    catch (er) {
        console.error(er)
    }
}
document.getElementById("searching-author").addEventListener("keyup", searchAuthorKeyUp)

async function deleteBook(bookID: string) {
    try {
        const newBookArray: Array<any> = await axios.delete(`/books/deleteBooks/${bookID}`)
        await renderBooks(newBookArray.data.books)
        alert("book deleted!")
    } catch (e) {
        console.error(e)
    }
}

async function updateBook(bookID: string) {
    try {
        const newBookName: HTMLElement = document.getElementById(`${bookID}name`);
        const newBookAuthor: HTMLElement = document.getElementById(`${bookID}author`);
        const updatedBooks: Array<any> = await axios.put(`/books/updateBook?id=${bookID}`, {
            bookName: newBookName.value,
            author: newBookAuthor.value
        })
        await renderBooks(updatedBooks.data.books)
        alert("Update Succesful!")
    } catch (e) {
        console.error(e)
    }
}