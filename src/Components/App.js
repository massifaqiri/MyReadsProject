import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import { Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import SearchPage from './SearchPage/SearchPage';

/**
 * @description Represents the entirety of the app, containing all components
 * @extends Component
 */
class App extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
    };

    /**
     * @description Fetches books in current shelves and populates the state respectively
     */
    componentDidMount() {
        BooksAPI.getAll().then(books => {
            books.forEach(book => {
                const bookShelf = book.shelf;
                const shelfBook = {
                    name: book.title,
                    authors: book.authors,
                    image: book.imageLinks.smallThumbnail,
                    ID: book.id,
                    currentShelf: bookShelf,
                };
                this.setState(prevState => {
                    return {
                        [bookShelf]: prevState[[bookShelf]].concat([shelfBook]),
                    };
                });
            });
        });
    }

    /**
     * @description Renders and passes the fetched data to both components.
     * Also routes them to their links.
     */
    render() {
        const { currentlyReading, wantToRead, read } = this.state;
        const shelfedBooks = [...currentlyReading, ...wantToRead, ...read];
        return (
            <div>
                <Route
                    exact
                    path='/'
                    render={() => (
                        <MainPage
                            currentlyReading={currentlyReading}
                            wantToRead={wantToRead}
                            read={read}
                        />
                    )}
                />

                <Route
                    path='/search'
                    render={() => <SearchPage shelfedBooks={shelfedBooks} />}
                />
            </div>
        );
    }
}

export default App;
