import React from 'react';
import BookListing from './BookListing';
import './../../App.css';

/**
 * @description Represents each shelf in the main page with its title and respective books
 * @prop {String} shelfTitle - the title of the shelf like, Want to Read
 * @prop {Array} shelfBooks - the array containing all books of the given shelf
 * @return the title of each shelf and the book listings for each shelf
 */
function Shelf(props) {
    const { shelfTitle, shelfBooks } = props;

    return (
        <div>
            <div className='list-books-content'>
                <div className='bookshelf'>
                    <h2 className='bookshelf-title'>{shelfTitle}</h2>
                    <div className='bookshelf-books'>
                        <ol className='books-grid'>
                            {shelfBooks.map((shelfBook, index) => (
                                <li key={index}>
                                    <BookListing bookProperties={shelfBook} />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shelf;
