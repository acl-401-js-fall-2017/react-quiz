import React, { Component } from 'react';

export default class Book extends Component{
  render() {
    const { books } = this.props;
    return(
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
          {books.map((book, i) => {
            return (
              <tr className="table-row" key={i}>
                <td>{book.title}</td>
                <td>{book.author}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    );
  }
}