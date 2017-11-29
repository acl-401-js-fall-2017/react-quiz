import React, { Component } from 'react';

export default class AddBooks extends Component {

  render() {
    return (
      <div>
        <h1>Books you want to add:</h1>
        <form onSubmit={event => {
          event.preventDefault();}}>
          <input name="Title"/>
          <input name="Author"/>          
          <button type="submit">Add</button>
        </form>    
      </div>
    );
  }
}
