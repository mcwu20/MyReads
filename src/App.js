import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      // console.log(this.state.books)
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <ListBooks
              books={books}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <SearchBooks
              books={books}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
