import React, { Component } from 'react';

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  render() {
    return (
      <div>
        <table id="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => <ListBook key={book._id} id={book._id} title={book.title}  author={book.author} onRemove={onRemove}/>)}
          </tbody>
        </table>
        <AddBook onAddBook={onAddBook}/>
        
      </div>
    );
  }
}

export default Books;


