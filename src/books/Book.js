import React, { PureComponent } from 'react';

export default class Book extends PureComponent {

  render() {
    const { bookInfo: { title, author }, index, onRemove } = this.props;
    return (
      <article className="Book">
        <h3>{title}</h3>
        <p>by: {author}</p>
        <p
          onClick={() => onRemove(index)}
          style={{
            background: '#CCC',
            borderRadius: '0.2em',
            width: 'fit-content',
            margin: 'auto',
            padding: '0.2em'
          }}
        >remove</p>
      </article>
    );
  }
}