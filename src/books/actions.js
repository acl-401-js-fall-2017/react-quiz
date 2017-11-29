export function addNewBook(state, newBook) {
  console.log(state)
  return {
    ...state,
    books: [
      ...state.books,
      newBook
    ]
  };
}