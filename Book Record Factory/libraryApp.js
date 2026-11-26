import { books, formatBookStatus } from "./bookModule.js";

export const libraryCatalog = books.map((book) => ({
  book,
  status: "available",
  statusMessage: formatBookStatus(book, "available"),
  label: book.getBookLabel(),
}));
