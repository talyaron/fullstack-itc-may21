const form = document.querySelector('#form') as HTMLFormElement;

form.addEventListener('submit', (ev) => addBooks(ev));

async function addBooks(ev) {
  ev.preventDefault();
  try {
    let { title, author } = ev.target.elements;
    title = title.value;
    author = author.value;

    const newBook = { title: title, author: author };
    const book = await addBookAxios(newBook);

    window.location.href = 'second.html';
    ev.target.reset();
  } catch (error) {
    console.log(error);
  }
}
