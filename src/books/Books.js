import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {  } from './actions';


class Books extends PureComponent {

  render() {
    console.log('state is:', this.props.state);
    return (
      <BookDiv books ={this.props.state}>
        
      </BookDiv>
    );
  }
}

class BookDiv extends PureComponent{

  render() {
    return (
      <ul>
        {this.props.books.map(book =>(
          <li type="none" key={book._id}>
            <h4> {book.title} </h4>
          </li>
        ))}
      </ul>
    );
  }
}

export default connect( 
  state => ({ state: state }),
  {}
)(Books);