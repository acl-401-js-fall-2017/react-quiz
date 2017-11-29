import React, { PureComponent } from 'react';
import AddBook from './AddBook';

class Books extends PureComponent {
  constructor(){
    super();
    this.state = {
      books : [
        {
          name: 'testBook',
          author: 'testAuthor' 
        }
      ]
    };
  }

  
  render() {
    const { books }= this.state;
    return (
      <div>
        <div className="books">
          {books.map(book => (
            <p key={book.name}>{book.name}, written by: {book.author} </p>
          ))}
        </div>
        <AddBook/>
      </div>
    );
  }
}

export default Books;