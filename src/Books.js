import React, { Component } from 'react';
import { v1 } from 'uuid';

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          _id: v1(),
          title: 'One',
          author: 'me'
        }
      ]
    };
  }

  handleAddBook = (elements) => {
    const newState = AddBook(this.state, elements);
    this.setState(newState);
  }
  

  render() {
    const { books } = this.state;
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
            {books.map(book => <ListBook key={book._id} id={book._id} title={book.title}  author={book.author}/>)}
          </tbody>
        </table>
        <AddBook handleAddBook={AddBook}/>
        
      </div>
    );
  }
}

export default Books;

class ListBook extends Component {
  
  render() {
    const { title, author } = this.props;
    return(
      <tr>
        <td>{ title }</td>
        <td>{ author }</td>
        {/* <td><button className="button remove" onClick={() => onRemove(id)}>Remove</button></td> */}
      </tr>
    );
  }
}

class AddBook extends Component {
  render() {
    const { onAddBook } = this.props;
    console.log('addbook', this.props);
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




