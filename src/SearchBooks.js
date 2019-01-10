import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {
  state = {
    query: '',
    searchedBooks: [],
    error: ''
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.updateBookSearch(query)
  }

  updateBookSearch = (query) => {
    if (query) {
      BooksAPI.search(query.trim()).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [], error: 'error' })
        } else {
          this.setState({ searchedBooks: searchedBooks, error: '' })
        }
      })
    } else {
      this.setState({ searchedBooks: [] })
    }
  }

  render() {
    const { searchedBooks, query } = this.state
    const { changeShelf, books } = this.props
    // console.log(this.props.changeShelf);
    // console.log(this.props.books);
    // console.log(this.state.searchedBooks);
    // console.log(this.state.error);

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'  className="close-search">Close</Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          {query && (
            <ol className='books-grid'>
              {searchedBooks.map((searchedBook) => {
                let onShelf = books.find((book) => (
                  searchedBook.id === book.id
                ))
                if (onShelf) {
                  searchedBook.shelf = onShelf.shelf
                } else {
                  searchedBook.shelf = 'none'
                }
                return(
                  <Books
                    book={searchedBook}
                    changeShelf={changeShelf}
                    key={searchedBook.id}
                  />
                )
              })}
              {this.state.error === 'error' && (
                <div>
                  <h3>Search not found.</h3>
                  <p>Please check SEARCH_TERMS.md for available search terms.</p>
                </div>
              )}
            </ol>
          )}
        </div>
      </div>
    )
  }
}


export default SearchBooks
