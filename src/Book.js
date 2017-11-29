import React, { Component } from 'react';

export default class Book extends Component{
  render() {
    const { book, i } = this.props;
    return(
      <tr className="table-row" key={i}>
        <td>{book.title}</td>
        <td>{book.author}</td>
      </tr>
    );
  }
}