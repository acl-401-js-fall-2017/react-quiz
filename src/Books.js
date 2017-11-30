import React, { PureComponent } from 'react';
import { addBook } from './actions';
import AddBook from './AddBook';

export default class Books extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        { title: 'My Book :)', author: 'John Doe' }
      ],
    };
  }

  handleAddBook(newBook) {
    const newState = addBook(this.state, newBook);
    return this.setState(newState);
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <AddBook books={books} addBook={book =>this.handleAddBook(book)}/>
        <ul>
          {books.map((book, i) => <li key={i} >{book.title}, by {book.author}</li>)}
        </ul>
      </div>
    );
    
  }
}