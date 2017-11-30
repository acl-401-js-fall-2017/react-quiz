import React, { Component } from 'react';
import Book from './book';
import AddBook from './add-book'

export default class Books extends Component{
    constructor(){
        super();
        this.state = {
            books: [
                { _id: 1, title: 'book1', author: 'author1'},
                { _id: 2, title: 'book2', author: 'author2'},
                { _id: 3, title: 'book3', author: 'author3'}
            ]
        }
    }

    handleAdd = (bookData) => {
        const newState = this.state;
        newState.books.push(bookData);
        this.setState(newState);
      }
        render(){
            const booklist = this.state.books.map((book, index) => {
                return <Book listKey={index} book={book} />;
            });
            return(
                <div>
                <ul>
                    {booklist}
                </ul>
                <AddBook handleAdd={bookData => this.handleAdd(bookData)}/>
                </div>
            );
        };
    }
