const Book = require('../models/Book');
const Transaction = require('../models/Transaction');

exports.getAllBooks = (req, res) => {
  Book.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.addBook = (req, res) => {
  Book.add(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Book added successfully' });
  });
};

exports.issueBook = (req, res) => {
  const { book_id } = req.body;
  Book.updateStatus(book_id, 1, (err) => {
    if (err) return res.status(500).json(err);
    Transaction.issue(req.body, (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Book issued successfully' });
    });
  });
};

exports.returnBook = (req, res) => {
  const { book_id } = req.body;
  Book.updateStatus(book_id, 0, (err) => {
    if (err) return res.status(500).json(err);
    Transaction.return(book_id, (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Book returned successfully' });
    });
  });
};
