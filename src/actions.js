export function addBook(state, newBook) {
  const newState = {
    ...state,
    books: [
      ...state.books,
      newBook
    ]
  };
  return newState;
}