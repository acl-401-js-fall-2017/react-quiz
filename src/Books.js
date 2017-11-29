import React, { Component } from 'react';
import Book from './Book';
import AddBook from '../AddBook';
export class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: {}
    };
  }

  handleAdd = book => {
    this.props.addBook(book);
  }

  render() {
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
            {this.state.books.map((book, i) => <Book book={book} i={i} />)}
          </thead>
        </table>
        <AddBook onComplete={this.handleAdd}/>
      </div>
    );
  }
}