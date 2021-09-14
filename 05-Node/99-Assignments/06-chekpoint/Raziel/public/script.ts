const createUser = document.querySelector("#formNewBook");
createUser.addEventListener("submit", addNewBook);
const inputSearch = document.querySelector('#search');


async function getAllBooks(){
  try {
      const getBooks = await axios.get('/books/getBooks');
      const {data, error} = getBooks
      console.log(data);
      
      renderBooks(data)

  } catch (error) {
      console.error(error)
      
  }
}


async function addNewBook(ev) {
  try {
    ev.preventDefault();
    let { bookName, bookAuth } = ev.target.elements;
    bookName = bookName.value;
    bookAuth = bookAuth.value;

    if (!bookName || !bookAuth)
      throw new Error("Please fill the missing fields");
    ev.target.reset();

    const newBook = { bookName, bookAuth };
    const bookInfo = await axios.post(`/books/newBook/`, newBook);
  } catch (error) {
    console.error(error);
  }
}




function renderBooks(books){
  try {
      let html:string = ''
      const root: HTMLElement = document.querySelector("#root");

      books.forEach(book => {
          const {bookName, bookAuth} = book
          
          html += `<div >
                              <h4><b>Book title: ${bookName}</b></h4>
                              <h4><b>Author: ${bookAuth}</b></h4>

                  </div>`
        
          
      });
      root.innerHTML = html
      
  } catch (e) {
      console.error(e);
      
  }

}

inputSearch.onkeyup = handleSearch;

async function handleSearch() {

try {

  const searchName={
    handleSearch: inputSearch.value;
   }
   
      const search = await axios.put('/books/searchBook',searchName)
    
          const {data, error} = search
          
          console.log(data);
          
          renderBooks(data)
  
} catch (error) {
  
}


}

