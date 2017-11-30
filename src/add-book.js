import React, { Component } from 'react';

export default class addBook extends Component{
    render() {
        const { handleAdd } = this.props;
        return (
          <form onSubmit={event => {
            event.preventDefault();
            const { elements } = event.target;
            const bookData = {
              title: elements.title.value,
              author: elements.author.value,
            };
            handleAdd(bookData);
            elements.title.value = '';
            elements.author.value = '';
          }}>
            <label>Title: </label>
            <input name="title" type="text" />
            <br/>
            <label>Auhtor: </label>
            <input name="author" type="text" />
            <br/>
            <button type="submit">Add</button>
          </form>
        ); 
      }
    }
    