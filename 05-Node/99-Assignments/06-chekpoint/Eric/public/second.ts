

const body = document.querySelector('#body')  as HTMLBodyElement
const inputSearch = document.querySelector('#search') as HTMLInputElement

inputSearch.onkeyup = searchByTitle

async function searchByTitle(){
    try {
        const searchTitle = {
            searchTitle: inputSearch.value
        };

        const getSearchByTitle = await searchByTitleAxios(searchTitle)
        
        const {data, error} = getSearchByTitle
        
        console.log(data);
        
        renderBooks(data)
    } catch (error) {
        
    }

}




// body.onload = getBooks
async function getBooks(){
    try {
        const getBook = await getBooksAxios()
        const {data, error} = getBook
        console.log(data);
        
        renderBooks(data.books)

    } catch (error) {
        console.error(error)
        
    }
}


function renderBooks(books){
    try {
        let html:string = ''
        const root = document.querySelector('#root')
        books.users.forEach(book => {
            const {title, author} = book
            
            html += `<div >
                                <h4><b>Book title: ${title}</b></h4>
                                <h4><b>Author: ${author}</b></h4>
                    </div>`
          
            
        });
        root.innerHTML = html
        
    } catch (e) {
        console.error(e);
        
    }

}