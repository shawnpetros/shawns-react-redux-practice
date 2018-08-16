import React from 'react'
import { connect } from 'react-redux'

const BookDetail = ({ book }) => (
  <div>
    <h3>Detail For:</h3>
    <p>Title: { book ? book.title : 'Please select a book for details.' }</p>
    <p>Pages: { book ? book.pages : 'Please select a book for details.' }</p>
  </div>
)

const mapStateToProps = ({ book }) => ({
  book
})

export default connect(mapStateToProps)(BookDetail)
