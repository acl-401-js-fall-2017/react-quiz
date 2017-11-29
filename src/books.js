import React, { Component } from 'react';
import Book from './book';
import AddBook from './add-book'

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
                <div>
                <ul>
                    <li>test</li>
                    {booklist}
                </ul>
                <AddBook/>
                </div>
            );
        };
    }
