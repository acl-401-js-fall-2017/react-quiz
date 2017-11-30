import React, { PureComponent } from 'react';

export default class AddBook extends PureComponent {

  render() {
    const { onAdd } = this.props;
    return (
      <form
        onSubmit={onAdd}
      >
        <input name="title" type="test" placeholder="title" required/>
        <input name="author" type="test" placeholder="author" required/>
        <input type="submit" value="add book"/>
      </form>
    );
  }
}