

export function addBook(state, newBook) {
  return {
    ...state,
    book: [
      ...state.book,
      newBook
    ]
  };
}