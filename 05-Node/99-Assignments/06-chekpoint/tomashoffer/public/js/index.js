async function handleSubmit(e){
    e.preventDefault();
    let {title, author} = e.target.elements;
    title = title.value.toUpperCase();
    author = author.value.toUpperCase();
    console.log(title, author);
    const newBook = {title, author};
    const response = await axios.post('/book/addbook', newBook);
    window.location.reload()
}

window.onload = setTimeout( async function getBooks(){
    const getBooks = await axios('/book/getbook')
    const books = getBooks.data;
    renderBooks(books)
}, 300)


async function renderBooks(books){

    const root = document.querySelector("#tablaRender");
    let html = "";
        books.forEach((book) => {
        html += `<tr>
                    <th scope="row">${book.title}</th>
                     <td>${book.author}</td>
                     <td><i onclick='deleteBook("${book.id}")' class="fas fa-trash"></i></td>
                 </tr>`;
      });
      root.innerHTML = html;
    }
  
async function deleteBook(id){
    await axios.post(`/book/delete/${id}`)
    window.location.reload()
}

async function searchBook(ev){
      try {
          ev.preventDefault();
          const searchBar = ev.target.parentElement.elements.searchBar.value;
          console.log(searchBar);
          const bookSearch = await axios.post('/book/searchbook', {searchBar});
          const bookArr = [bookSearch.data];

          for(let i = 0; i < bookArr.length; i++){
            console.log(bookArr[i].title) 
            renderBooks(bookArr[i])
          }

      } catch (e) {
          console.error(e)
      }
  }
  // EVENTLISTENERS
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', searchBook);


