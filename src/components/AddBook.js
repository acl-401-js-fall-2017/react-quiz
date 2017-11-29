import React, { Component } from 'react';

export default class AddBook extends Component {
    
  render() {
    const { addBook } = this.props;

    return (
      <div>
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          const newBook = {
            title: elements.title.value,
            author: elements.author.value
          };
          elements.title.value = elements.author.value = '';
          return addBook(newBook);
        }}>
          <input name="title" placeholder="Title" required />
          <input name="author" placeholder="Author" required />
          <button type="submit"> Add Book </button>
        </form>
      </div>
    );
  }
}