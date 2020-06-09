import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import './../../App.css';

/**
 * @description Represents the main page
 * @prop {Array} currentlyReading - the books from Currently Reading shelf
 * @prop {Array} wantToRead - the books from Want to Read shelf
 * @prop {Array} read - the books from Read shelf
 * @return the title, the shelves (components) and the add button of the main page
 */
function MainPage(props) {
    const { currentlyReading, wantToRead, read } = props;

    return (
        <div>
            <div className='list-books-title'>
                <h1>MyReads</h1>
            </div>
            <Shelf
                shelfTitle='Currently Reading'
                shelfBooks={currentlyReading}
            />
            <Shelf shelfTitle='Want to Read' shelfBooks={wantToRead} />
            <Shelf shelfTitle='Read' shelfBooks={read} />
            <div className='open-search'>
                <Link to='/search'>
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    );
}

export default MainPage;
