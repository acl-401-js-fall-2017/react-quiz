import React, { Component } from 'react';
import Book from './Book';
export class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: {}
    };
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
            {books.map((book, i) => <Book book={book} i={i}/>)}
          </thead>
        </table>
      </div>
    );
  }
}