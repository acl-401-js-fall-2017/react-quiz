import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addBook } from './actions';
import { Redirect } from 'react-router-dom';


export class NewCategory extends PureComponent {
  
  state={
    redirect: false
  }

  handleAdd = book => {
    this.props.addBook(book);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { elements } =event.target;
    const category ={
      name: elements.name.value,
    };
    this.setState({ redirect: true });
    this.handleAdd(category);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder="name"/>
          <button type="submit">Add</button>
        </form> 
        { this.state.redirect && (<Redirect to="/books"/>) }
      </div>
    );
  }
}

export default connect( 
  state => ({ categories: state }),
  { addBook }
)(NewCategory);