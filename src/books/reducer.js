import { addBook } from './actions';
import shortid from 'shortid';

function initBooks() {
  return [{
    title:'good Book',
    _id: shortid.generate()
  }];
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
