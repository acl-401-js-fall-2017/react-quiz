import React, { PureComponent } from 'react';

class Counter extends PureComponent {

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  counter = (action) => {
    switch(action) {
      case 'UP':
        return this.setState({ count: this.state.count + 1 });
      case 'DOWN':
        return this.setState({ count: this.state.count - 1 });
      default:
        return this.state;    
    }
  }

  render() {
    const { count } = this.state;

    return(
      <div>
        <button onClick={() => this.counter('DOWN')}>-</button>
        {count} 
        <button onClick={() => this.counter('UP')}>+</button>
      </div>
    );
  }
}

export default Counter;
