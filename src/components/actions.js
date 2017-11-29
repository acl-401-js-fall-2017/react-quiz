

export function addBook(state, newBook) {
  return {
    ...state,
    books: [
      ...state.books,
      newBook
    ]
  };
}