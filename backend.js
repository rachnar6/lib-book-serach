// search.js
// Backend simulation for book search

const searchBook = (query) => {
  const books = ["1984", "Harry Potter", "The Hobbit", "The Great Gatsby"];
  const result = books.filter(book => book.toLowerCase().includes(query.toLowerCase()));
  console.log("Search result:", result);
};

searchBook("harry");
