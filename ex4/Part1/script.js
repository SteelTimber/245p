const books = [
 {title: "1984", author: "George Orwell"},
 {title: "In Search of Lost Time", author: "Marcel Proust"},
 {title: "Don Quixote", author: "Miguel de Cervantes"},
 {title: "Moby Dick", author: "Herman Melville"}
];

function filterBooks(books) {
  return books.filter(book => book.author !== "George Orwell" && book.author !== "Herman Melville");
}


console.log(filterBooks(books));
