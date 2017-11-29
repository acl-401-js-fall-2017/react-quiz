import React, { Component } from 'react';

export default class AddBook extends Component{

  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value
    });
  }
  render() {
    const { title, author } = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          Title: <input title={title} value={title} onChange={this.handleChange}/>
        </div>
        <div>
          Author: <input author={author} value={author} onChange={this.handleChange}/>
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}