import { addBook } from './actions';

function initBooks() {
  const book ={
    title:'good Book'
  };
  addBook(book);
}

export default function books(state = initBooks(), { type, payload }) {
  switch (type) {
    case 'BOOK_ADD':
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}
