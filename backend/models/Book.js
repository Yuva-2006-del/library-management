const db = require('../config/db');

const Book = {
  getAll: (callback) => {
    db.query('SELECT * FROM books', callback);
  },
  add: (book, callback) => {
    const { title, author, isbn, publication_year } = book;
    db.query(
      'INSERT INTO books (title, author, isbn, publication_year) VALUES (?, ?, ?, ?)',
      [title, author, isbn, publication_year],
      callback
    );
  },
  getAvailable: (callback) => {
    db.query('SELECT * FROM books WHERE is_issued = 0', callback);
  },
  getIssued: (callback) => {
    db.query('SELECT * FROM books WHERE is_issued = 1', callback);
  },
  updateStatus: (id, is_issued, callback) => {
    db.query('UPDATE books SET is_issued = ? WHERE id = ?', [is_issued, id], callback);
  }
};

module.exports = Book;
