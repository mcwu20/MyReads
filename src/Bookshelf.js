import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, changeShelf } = this.props
    const shelf = [
      {category: 'currentlyReading', name: 'Currently Reading'},
      {category: 'wantToRead', name: 'Want To Read'},
      {category: 'read', name: 'Read'}
    ]

    return (
      <div>
        {shelf.map((shelf, index) => (
          <div className="bookshelf" key={shelf.category}>
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.filter((book) => book.shelf === shelf.category).map((book) => (
                  <Books
                    book={book}
                    key={book.id}
                    changeShelf={changeShelf}
                  />
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    )
  }
}


export default Bookshelf
