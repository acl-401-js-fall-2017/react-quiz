import React, { PureComponent } from 'react';


export default class Books extends PureComponent {
    state = {
        books: []
    }

    render(){
        const { books } = this.state;

        return (
            <section>
                <h1>All the books</h1>
            </section>
        )
    }
}