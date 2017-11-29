import React, { PureComponent } from 'react';
import AddBook from './AddBook';

export default class Book extends PureComponent {

  render() {
    const { addBook } = this.props;
    return (
      <div>
        <table>
          <tbody>
            {this.props.books.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td><AddBook addBook={newBook => addBook(newBook)}/></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}