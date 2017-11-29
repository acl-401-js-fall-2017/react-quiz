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

    handleAdd = (bookData) => {
        const newState = this.state;
        newState.books.push(bookData);
        this.setState(newState);
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
                <AddBook handleAdd={bookData => this.handleAdd(bookData)}/>
                </div>
            );
        };
    }
