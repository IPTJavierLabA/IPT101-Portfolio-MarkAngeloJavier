// 01 Objects + 02 Functions + 03 Methods
export function createBookRecord(title, author, year) {
  return {
    title: title,
    author: author,
    year: year,
    getBookLabel() {
      return `${this.title} by ${this.author} (${this.year})`;
    },
  };
}

export const book = createBookRecord("Noli Me Tangere", "José Rizal", 1887);

export const books = [
  book,
  createBookRecord("El Filibusterismo", "José Rizal", 1891),
  createBookRecord("Florante at Laura", "Francisco Balagtas", 1838),
];

// 02 Functions
export function formatBookStatus(bookObj, status) {
  return `"${bookObj.title}" by ${bookObj.author} is currently ${status}.`;
}
