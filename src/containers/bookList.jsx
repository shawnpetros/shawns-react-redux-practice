import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const renderList = books => books.map(book => <li key={book.title} className="list-group-item">{ book.title }</li>);

const BookList = ({ books }) => (
  <ul className="list-group col-sm-4">
    {renderList(books)}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ books }) => ({
  books,
});

export default connect(mapStateToProps)(BookList);
