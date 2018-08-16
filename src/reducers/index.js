import { combineReducers } from 'redux'
import BooksReducer from './reducer-books'
import ActiveBook from './reducer-active-book'

export default combineReducers({
  books: BooksReducer,
  book: ActiveBook
})
