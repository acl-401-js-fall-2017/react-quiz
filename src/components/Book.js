import React, { PureComponent } from 'react';
import AddBook from '../AddBook';

export default class Book extends PureComponent {
  render() {
    const { books, handleSubmit } = this.props;
    const comp = books.map((book, i) => {
      return (
        <tr key={i}>
          <td>{book.title}: {book.description}</td>
        </tr>
      );
    });
    
    return (
      <div>
        <table>
          <tbody>
            {comp} 
          </tbody>
        </table>
        <AddBook handleSubmit={handleSubmit}/>
        <form onSubmit={handleSubmit}></form>
      </div>
    );
  }
}
