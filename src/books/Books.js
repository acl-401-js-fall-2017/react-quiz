import React, { PureComponent } from 'react';
import AddBook from './AddBook';
import Book from './Book';
import { addNewBook } from './actions';

export default class Books extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    this.setState({
      books: [
        ...this.state.books,
        {
          title: 'A Book',
          author: 'Arthur'
        },
        {
          title: 'The Hobbit',
          author: 'J. R. R. Tolkein'
        }
      ]
    });
  }

  handleAdd = e => {
    e.preventDefault();
    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value
    };

    this.setState({
      books: [
        ...this.state.books,
        newBook
      ]
    });
  }

  render() {
    return (
      <div className="Books">
        <h1>BOOKS! :D</h1>
        <AddBook onAdd={this.handleAdd}/>
        {this.state.books.map((book, i) => (
          <Book key={i} bookInfo={book}/>
        ))}
      </div>
    );
  }
}