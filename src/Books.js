import React, { Component } from 'react';
import Book from './Book';
import AddBook from './AddBook';
export class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  handleAdd = book => {
    this.props.addBook(book);
  }

  render() {
    return(
      <div>
        <Book books={this.state.books}/>
        <AddBook onComplete={this.handleAdd}/>
      </div>
    );
  }
}