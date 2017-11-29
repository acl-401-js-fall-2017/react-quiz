import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './components/books';
import AddBooks from './components/addBook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Quiz</h1>
        </header>
        <Books/>
        <AddBooks/>
      </div>
    );
  }
}

export default App;
