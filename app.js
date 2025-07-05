const searchInput = document.getElementById('search');
const bookList = document.getElementById('book-list');

searchInput.addEventListener('input', async () => {
  const query = searchInput.value;
  const res = await fetch(`/api/books/search?query=${query}`);
  const books = await res.json();
  displayBooks(books);
});

async function loadBooks() {
  const res = await fetch('/api/books');
  const books = await res.json();
  displayBooks(books);
}

function displayBooks(books) {
  bookList.innerHTML = books.map(book =>
    `<div>
      <strong>${book.title}</strong> by ${book.author} (${book.category}) - ${book.status}
    </div>`
  ).join('');
}

loadBooks();
