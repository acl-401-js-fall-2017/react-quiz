import React, { Component } from 'react';


export default class book extends Component{
    render(){
        const { book } = this.props
        return(
            <li>
                <h1> title: {book.title}</h1> 
                <h2>author: {book.author}</h2>
            </li>
        );
    }
}