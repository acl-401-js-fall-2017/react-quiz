import React, { Component } from 'react';

export default class Books extends Component {

  state = {
    books: []
  }

  render() {
    return(
      <div>  
        <h1>Books:</h1>
        <ul>
          <li>
            Moby, Anderson
          </li>
        </ul>
      </div>
    );
  }
}
