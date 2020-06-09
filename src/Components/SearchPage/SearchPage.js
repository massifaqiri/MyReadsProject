import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchResults from './SearchResults';
import './../../App.css';
import * as BooksAPI from './../../BooksAPI';
import { debounce } from 'throttle-debounce';

/**
 * @description Represents the search page at /search, containing the search bar and the books listings
 * @extends Component
 */
class SearchPage extends Component {
    state = {
        searchResults: [],
    };

    /**
     * @description Given the search term from the search bar input, the search API is invoked.
     * Before including its results to the state, it is checked against the current shelves,
     * in order to auto select them in dropdown if they are in the current shelves
     * @param {String} term - The search term that the user inputs at the search bar
     */
    search(term) {
        term === ''
            ? this.setState({ searchResults: [] })
            : BooksAPI.search(term.trim())
                  .then(results => {
                      this.setState({ searchResults: [] });
                      results.forEach(result => {
                          let currentShelf = 'none';
                          for (let bookObject of this.props.shelfedBooks) {
                              if (bookObject.ID === result.id) {
                                  currentShelf = bookObject.currentShelf;
                              }
                          }

                          const shelfBook = {
                              name: result.title,
                              authors: result.authors,
                              image: result.imageLinks.smallThumbnail,
                              ID: result.id,
                              currentShelf: currentShelf,
                          };

                          this.setState(prevState => {
                              return {
                                  searchResults: prevState.searchResults.concat(
                                      [shelfBook]
                                  ),
                              };
                          });
                      });
                  })
                  .catch(() =>
                      console.log(
                          'The book was either missing thumbnail or author. We filtered them out.'
                      )
                  );
    }

    /**
     * @description Handles the search bar and its listings based on the term using SearchResults component
     * @return the search bar alongside its back button and the SearchResults component
     */
    render() {
        const { searchResults } = this.state;

        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link to='/'>
                        <button className='close-search'>Close</button>
                    </Link>

                    <div className='search-books-input-wrapper'>
                        <input
                            type='text'
                            placeholder='Search by title or author'
                            ref={input => {
                                this.textInput = input;
                            }}
                            onChange={debounce(500, () =>
                                this.search(this.textInput.value)
                            )}
                        />
                    </div>
                </div>
                <SearchResults searchResults={searchResults} />
            </div>
        );
    }
}

export default SearchPage;
