const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("The Odin Project", "Omar Al-Hammadi", 100, true);
addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 500, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 200, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 100, false);

console.log(myLibrary);

displayBooks();

function displayBooks() {
  const tableBody = document.getElementById("info");
  tableBody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const row = document.createElement("tr");

    const title = document.createElement("td");
    title.textContent = book.title;

    const author = document.createElement("td");
    author.textContent = book.author;

    const pages = document.createElement("td");
    pages.textContent = book.pages;

    const read = document.createElement("td");
    read.textContent = book.read;

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(read);

    tableBody.appendChild(row);
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();

  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#read").checked = false;
});