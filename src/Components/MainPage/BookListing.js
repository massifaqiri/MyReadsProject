import React from 'react';
import MoveBook from './MoveBook';
import './../../App.css';

/**
 * @description Represents the book component in each shelf and search page
 * @prop {Object} bookProperties - the properties of each book like, name and image
 * @return each book listing with its image, name and author name(s),
 * besides the MoveBook dropdown component
 */
function BookListing(props) {
    const { name, authors, image, ID, currentShelf } = props.bookProperties;
    return (
        <div>
            <div className='book'>
                <div className='book-top'>
                    {/* Used guard operator to handle the books with no image thumbnails */}
                    {image && (
                        <div
                            className='book-cover'
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url('${image}')`,
                            }}
                        />
                    )}
                    <MoveBook bookID={ID} currentShelf={currentShelf} />
                </div>

                <div className='book-title'>{name}</div>
                {authors &&
                    authors.map((author, index) => (
                        <div className='book-authors' key={index}>
                            {author} <br />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default BookListing;
