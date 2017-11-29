import React, { Component } from 'react';
import Book from './book';

export default class Books extends Component{
    constructor(){
        super();
        this.state = {
            books: [
                { title: 'book1', author: 'author1'},
                { title: 'book2', author: 'author2'},
                { title: 'book3', author: 'author3'}
            ]
        }
    }
        render(){
            const booklist = this.state.books.map(book => {
                return <Book book={book}/>
            });

            return(
                <ul>
                    <li>test</li>
                    {booklist}
                </ul>
            );
        };
    }
