import React, { PureComponent } from 'react';

export default class Books extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  render() {
    return (
      <div className="Books">
        <h1>BOOKS! :D</h1>
      </div>
    );
  }
}