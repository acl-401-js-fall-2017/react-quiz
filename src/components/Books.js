import React, { Component } from 'react';
import Book from './Book';

export default class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [{
        author:'JK Rowling', 
        title:'Harry Potter'
      }]
    };
  }

  handleAdd = (newBook) => {
    const copyView = [ ...this.state.books ];
    copyView.push(newBook);
    this.setState({ book: copyView });
  }
  render() {
    const { books } = this.state; 

    return (
      <div>
        <Book book={books} handleSubmit={this.handleAdd}/>
        <input type="button" value="Book List"/>
      </div>
      

    );
  }
}
