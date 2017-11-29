import React, { Component } from 'react';
import AddBook from './AddBook';
import Book from './Book';

export default class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          title: 'A Book',
          author: 'Arthur'
        },
        {
          title: 'The Hobbit',
          author: 'J. R. R. Tolkein'
        }
      ]
    };
  }

  addNewBook = newBook => {
    this.setState({
      books: [
        ...this.state.books,
        newBook
      ]
    });
  }

  handleAdd = e => {
    e.preventDefault();
    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value
    };
    e.target.reset();
    this.addNewBook(newBook);
  }

  handleRemove = i => {
    const newBooks = [ ...this.state.books ];
    newBooks.splice(i, 1);
    this.setState({
      books: newBooks
    });
  }

  render() {
    return (
      <div className="Books">
        <h1>BOOKS! :D</h1>
        <AddBook onAdd={this.handleAdd}/>
        {this.state.books.map((book, i) => (
          <Book key={i} bookInfo={book} index={i} onRemove={this.handleRemove}/>
        ))}
      </div>
    );
  }
}