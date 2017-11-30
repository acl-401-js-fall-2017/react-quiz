import React, { Component } from 'react';

export default class AddBook extends Component{

  constructor(props) {
    super(props);
    const { book = {} } = props;
    this.props = {
      title: book.title || null,
      author: book.author || null
    };
  }
  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value
    });
  }
  render() {
    const { title, author } = this.props;
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