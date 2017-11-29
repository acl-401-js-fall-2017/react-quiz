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

class AddBook extends Component {
  render() {
    const { onAddBook } = this.props;
    return (
      <form id="form" onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target;
        const addedBook = {
          title: elements.title.value,
          author: elements.author.value
        };
        onAddBook(addedBook);
        elements.title.value='';
        elements.author.value='';
      }}>
        <fieldset>
          <legend>Add a book</legend>
          <label>Book Title: </label>
          <input className="form-input" name="title"/>
          <label>author: </label>
          <input className="form-input" name="author"/>
          <button className="button add" type="submit">Add</button>
        </fieldset>
      </form>
    ); 
  }
}




