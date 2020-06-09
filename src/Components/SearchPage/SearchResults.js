import React from 'react';
import BookListing from './../MainPage/BookListing';
import './../../App.css';

/**
 * @description Lists all of the search results with BookListing component
 * @prop {Array} searchResults - the result of the search based on the search API
 */
function SearchResults(props) {
    const { searchResults } = props;
    return (
        <div className='search-books-results'>
            <ol className='books-grid'>
                {searchResults.map((searchResult, index) => (
                    <li key={index}>
                        <BookListing bookProperties={searchResult} />
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default SearchResults;
