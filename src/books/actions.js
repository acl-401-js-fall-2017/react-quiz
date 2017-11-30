
import shortid from 'shortid';


export function addBook(book) {
  book._id = shortid.generate();
  console.log('got to add with ', book);
  return dispatch => {
    dispatch({
      type: 'BOOK_ADD',
      payload: book
    });
  };
}
