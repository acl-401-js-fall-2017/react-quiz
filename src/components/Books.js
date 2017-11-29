import React, { PureComponent } from 'react';

import BookData from '../data/bookData';
import Book from './Book';

import { addBook } from './actions';


export default class Books extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: BookData,
    };
  }

    handleAdd = book => {
      const newState = addBook(this.state, book);
      this.setState(newState);
    }

    render(){
    //   const displayBooks = {
    //     book: <Book books={this.state.books}
    //       addBook={book => this.handleAdd(book)}
    //     />
    //   };
      const { books } = this.state;

      return (
        <section>
          <h1>All the books</h1>
          <Book books={this.state.books}
            addBook={book => this.handleAdd(book)}
          />
        </section>
      );
    }
}