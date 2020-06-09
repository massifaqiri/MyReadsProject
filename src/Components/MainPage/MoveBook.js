import React, { Component } from 'react';
import * as BooksAPI from './../../BooksAPI';
import './../../App.css';

/**
 * @description handles the MoveBook dropdown component that moves books between shelves
 * @extends Component
 */
class MoveBook extends Component {
    /**
     * @description Moves the book to the selected shelf with BooksAPI.update
     * @param {event} event - The event of user's selection from the dropdown
     */
    handleSubmit(event) {
        const bookID = { id: this.props.bookID };
        const optionValue = event.target.value;
        BooksAPI.update(bookID, optionValue)
            .then(msg => console.log('Successfully moved the book!'))
            .catch(msg => console.log('Failed to move the book!'));
    }

    render() {
        const { currentShelf } = this.props;

        return (
            <div>
                <div className='book-shelf-changer'>
                    <select
                        onChange={event => this.handleSubmit(event)}
                        defaultValue={currentShelf}
                    >
                        <option value='move' disabled>
                            Move to...
                        </option>
                        <option value='currentlyReading'>
                            Currently Reading
                        </option>
                        <option value='wantToRead'>Want to Read</option>
                        <option value='read'>Read</option>
                        <option value='none'>None</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default MoveBook;
