import React, { PureComponent } from 'react';

export default class AddBook extends PureComponent {
  render() {
    const { handleOnSubmit } = this.props;
    return (
      <div>
        <h2>Add a new book!</h2>
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          handleOnSubmit(elements.name.value, elements.author.value);
        }}>
          <input type="text" name="name" placeholder="book name" required />
          <br/>
          <input type="text" name="author" placeholder="author name" required />
          <br/>
          <button type="submit">Save Book</button>
        </form>
      </div>
    );
  }
}