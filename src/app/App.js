import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Books from '../books/Books';
import logo from './logo.svg';
import './App.css';
import NewBook from '../books/NewBook';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Book club</h1>
            <NavLink to ="/books">Books</NavLink>
            <span> </span>
            <NavLink to ="/books/newBook">Add Book</NavLink>
          </header>
          <Switch>
            <Route path="/books/newBook" component={NewBook}/>
            <Route path="/books" component={Books}/>
          </Switch>
        </div>
      </Router>
    );
  }
}