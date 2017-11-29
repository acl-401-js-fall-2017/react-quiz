import React, { PureComponent } from 'react';

export default class AddBook extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target;
        const bookObj = { title: elements.title.value, description: elements.description.value, url: elements.url.value };
        handleSubmit(bookObj);
        elements.title.value = '';
        elements.author.value = '';
      }}>
        <label>
          Title:
          <input name="title"/>
        </label>
        <label>
          Author:
          <input name="author"/>
        </label>
        <button type="submit">Add Book</button>
      </form>
    );
  }
}