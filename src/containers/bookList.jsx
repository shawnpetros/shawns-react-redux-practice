import React from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions'

selectBook({ title: 'aha!' })

const renderList = ({ books, selectBook }) => books.map(book => <a key={book.title} onClick={() => selectBook(book)}><li key={book.title} className='list-group-item'>{ book.title }</li></a>)

const BookList = ({ books, selectBook }) => (
  <ul className='list-group col-sm-4'>
    {renderList({ books, selectBook })}
  </ul>
)

const mapStateToProps = ({ books }) => ({
  books
})

export default connect(mapStateToProps, { selectBook })(BookList)
