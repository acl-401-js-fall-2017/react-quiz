import React, { PureComponent } from 'react';

export default class Book extends PureComponent {

  render() {
    const { bookInfo: { title, author } } = this.props;
    return (
      <article className="Book">
        <h3>{title}</h3>
        <p>by: {author}</p>
      </article>
    );
  }
}