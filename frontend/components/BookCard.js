import React from 'react';
import '../styles/bookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><b>Author:</b> {book.author}</p>
      <p><b>ISBN:</b> {book.isbn}</p>
      <p><b>Year:</b> {book.publication_year}</p>
      <p><b>Status:</b> {book.is_issued ? 'Issued' : 'Available'}</p>
    </div>
  );
};

export default BookCard;
