import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

class Books extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    // console.log(this.props.book);
    const { book, changeShelf } = this.props

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}>
            </div>
            <ShelfChanger book={book} changeShelf={changeShelf}/>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors && book.authors.map((author, index) => (
            <div className="book-authors" key={index}>{author}</div>
          ))}
        </div>
      </li>
    )
  }
}

export default Books
