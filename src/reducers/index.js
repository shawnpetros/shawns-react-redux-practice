import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';

export default combineReducers({
  books: BooksReducer,
});
