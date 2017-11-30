import React, { Component } from 'react';


export default class book extends Component{
    render(){
        const { book, listKey } = this.props
        return(
            <li key={listKey}>
                <h1> title: {book.title}</h1> 
                <h2>author: {book.author}</h2>
            </li>
        );
    }
}