import React, { PureComponent } from 'react';
import Book from './Book';

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

  render() {
    return (
      <div className="Books">
        <h1>BOOKS! :D</h1>
        {this.state.books.map(book => (
          <Book bookInfo={book}/>
        ))}
      </div>
    );
  }
}