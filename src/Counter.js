import React, { PureComponent } from 'react';

class Counter extends PureComponent {

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }


  counter = (state, action) => {
    switch(action.value) {
      case 'UP':
        return state +1;
      case 'DOWN':
        return state -1;
      default:
        return state;    
    }
  }




  render() {
    const { count } = this.state;

    return(
      <div>
        <button action="DOWN" onClick={this.counter()}>-</button>
        {count} 
        <button action="UP" onClick={this.counter()}>+</button>
      </div>

    );
  }
}

export default Counter;
