const myLibrary = [];

function Book(title,author, pages) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.id = crypto.randomUUID()
  this.info = function() {
    // return an object with book details
    return { titulo: this.title,
             autor: this.author,
             paginas: this.pages }
  };
}

function llamarForm() {
  // this function will be called when the button is clicked
  // it should open a form to add a new book

  // var formulario = document.getElementById('formu');
  //     formulario.style.display = block

  alert("Función llamarForm() no implementada aún.");

}

function addBookToLibrary(title,author, pages) {
  // take params, create a book then store it in the array
  const book = new Book(title, author, pages);
  myLibrary.push(book); 
  // console.log(`Book added: ${book.title} by ${book.author}, ${book.pages} pages`);
}