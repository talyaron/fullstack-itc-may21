const body = document.querySelector('#body') as HTMLBodyElement
const inputSearch = document.querySelector('#search') as HTMLInputElement

body.onload = getBooks
inputSearch.onkeyup = searchByTitle

async function getBooks() {
    try {
        const getBooks = await getAllBooksAxios()
        const { data } = getBooks
        renderBooks(data.books)
    } catch (e) {
        alert(e)
    }
}

function renderBooks(book) {
    try {
        let html: string = ''
        const rootBooks = document.querySelector('#rootBooks') as HTMLDivElement;
        if (!rootBooks) throw new Error("No board to show")

        if (book.books.length > 0) {
            html += `<table id="books">      
         <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>🔧</th>
        <tr>
        </thead>
        <tbody>`

            book.books.forEach(book => {
                const { id, title, author } = book
                html += `<tr>
                    <td>${title}</td>
                    <td>${author}</td>
                    <td><i class="fas fa-trash delete" onclick='deleteBook("${id}")'></i> 
                       
                 </tr>`

            });

            html += `   </tbody>
                    </table>`
        }

        rootBooks.innerHTML = html;
    } catch (e) {
        alert(e)
    }
}

async function searchByTitle() {
    try {

        const searchTitle = {
            searchTitle: inputSearch.value
        }

        if (inputSearch.value) {
            const getTitles = await searchByTitleAxios(searchTitle)
            const { data } = getTitles
            renderBooks(data)
        } else {
            getBooks()
        }


    } catch (e) {
        alert(e)
    }
}

async function deleteBook(id: string) {
    try {
        const deleteBook = await deleteBookAxios(id);
        const { data } = deleteBook

        if (data.books.books.length > 0) {
            renderBooks(data.books)
        }
        else {
            alert("This is the last book in our store, you back to the first page to add new books to the list")
            window.location.href = 'index.html';
        }
    } catch (e) {
        alert(e)
    }
}