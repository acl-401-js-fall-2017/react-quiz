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

    handleAdd = books => {
      const newState = addBook(this.state, books);
      this.setState(newState);
    }

    render(){

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