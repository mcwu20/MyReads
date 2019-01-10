import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  updateShelf = (e) => {
    this.props.changeShelf(this.props.book, e.target.value)
  }

  render() {
    // console.log(this.props.book);
    // console.log(this.props.changeShelf);
    const { book } = this.props

    return (
      <div className="book-shelf-changer">
        <select
          onChange={this.updateShelf}
          defaultValue={book.shelf}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger
