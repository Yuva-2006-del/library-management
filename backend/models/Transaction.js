const db = require('../config/db');

const Transaction = {
  issue: (data, callback) => {
    const { book_id, patron_name, issue_date, due_date } = data;
    db.query(
      'INSERT INTO transactions (book_id, patron_name, issue_date, due_date) VALUES (?, ?, ?, ?)',
      [book_id, patron_name, issue_date, due_date],
      callback
    );
  },
  return: (book_id, callback) => {
    const return_date = new Date();
    db.query(
      'UPDATE transactions SET return_date = ? WHERE book_id = ? AND return_date IS NULL',
      [return_date, book_id],
      callback
    );
  }
};

module.exports = Transaction;
