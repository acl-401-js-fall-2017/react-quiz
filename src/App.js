import React, { Component } from 'react';
// import { addBooks } from '../action-books';
import './App.css';
import Books from './Books';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     books: []
  //   };
  // }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Books</h1>
        </header>
        <Books/>
      </div>
    );
  }
}

export default App;

	
