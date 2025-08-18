const myLibrary = [];
const form = document.querySelector("form");
const bookShowCase = document.querySelector(".book-showCase");

form.addEventListener("submit", addBook);

bookShowCase.addEventListener("click", function (e) {
  const bookCard = e.target.closest(".card");
  if (!bookCard) return;
  const bookId = bookCard.parentElement.id;

  if (e.target.matches(".btn-primary")) {
    readBook(bookId);
  }

  if (e.target.matches(".btn-danger")) {
    deleteBook(bookId);
  }
});

function addBook(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const author = formData.get("author");
  const title = formData.get("title");
  const pages = formData.get("pages");

  myLibrary.push(new Book(title, author, pages)); // Corrige el orden
  renderBooks();
  form.reset();
}

function renderBooks() {
  bookShowCase.innerHTML = myLibrary.map((book) => book.bookElement()).join("");
}

function deleteBook(bookId) {
  const bookIndex = myLibrary.findIndex((book) => book.id === bookId);

  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
    renderBooks();
  }
}

function readBook(bookId) {
  const book = myLibrary.find((book) => book.id === bookId);

  if (book) {
    book.read = true;
    renderBooks();
  }
}

function Book(title, author, pages) {
  this.id = crypto.randomUUID();
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = false;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read by you." : "not read yet!"}`;
  };
  this.bookElement = function () {
    return `
      <div id="${this.id}" class="col-md-4">
        <div class="card">
          <div class="card-header">${this.title}</div>
          <div class="card-body">
            <p class="card-text">
              <span class="fw-bold">UUID:</span> ${this.id}
            </p>
            <p class="card-text">
              <span class="fw-bold">Author:</span> ${this.author}
            </p>
            <p class="card-text">
              <span class="fw-bold">Pages:</span> ${this.pages}
            </p>
            <div class="d-flex gap-2">
              <button class="btn btn-primary btn-sm" ${this.read ? "disabled" : ""}>
                ${this.read ? "Already Read" : "Mark as Read"}
              </button>
              <button class="btn btn-danger btn-sm">Delete Book</button>
            </div>
          </div>
        </div>
      </div>
    `;
  };
}