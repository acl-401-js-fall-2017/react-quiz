
// import shortid from 'shortid';


export function addBook(book) {
  console.log('got to add with ', book);
  return dispatch => {
    dispatch({
      type: 'Book_ADD',
      payload: book
    });
  };
}
