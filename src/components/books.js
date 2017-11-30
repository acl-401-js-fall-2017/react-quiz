import React, { Component } from 'react';

export default class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        'title:Fox, Author:Box',
        'title:Moby, Author: Anderson'
      ]
    };
  }

  render() {
    const { books } = this.state;
    return(
      <div>  
        <h1>Books:</h1>
        <ul>
          <li>
            {books[1]}
          </li>
          <li>
            {books[0]}
          </li>
        </ul>
      </div>
    );
  }
}
