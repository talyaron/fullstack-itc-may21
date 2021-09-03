const form = document.querySelector('#form') as HTMLFormElement;
const body = document.querySelector('#body') as HTMLBodyElement;

form.onsubmit = addBooks
body.onload = showLink

async function addBooks(ev) {
    ev.preventDefault();
    try {
        let { title, author } = ev.target.elements
        title = title.value
        author = author.value

        const newBook = {
            title: title,
            author: author,
        }

        const book = await addBooksAxios(newBook)

        if (typeof book === 'string') throw new Error(`${book}`)

        else {
            alert(book.data.message)
            const link = document.querySelector('.link') as HTMLInputElement
            link.style.display = 'block'
            link.style.textAlign = 'center'
        }

        ev.target.reset();


    } catch (e) {
        alert(e)
    }
}

async function showLink(ev) {
    ev.preventDefault()
    try {
        const getBooks = await getAllBooksAxios()
        const { data } = getBooks

        if (data.books.books.length > 0) {
            const link = document.querySelector('.link') as HTMLInputElement
            link.style.display = 'block'
            link.style.textAlign = 'center'
        }
    } catch (e) {
        alert(e)
    }
}