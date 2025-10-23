import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { getBooks, returnBook } from '../lib/api';

const ReturnBook = () => {
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data.filter(book => book.is_issued));
    };
    fetchBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await returnBook({ book_id: bookId });
    alert('Book returned successfully!');
    setBookId('');
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <select value={bookId} onChange={(e) => setBookId(e.target.value)} required>
          <option value="">Select Issued Book</option>
          {books.map(book => <option key={book.id} value={book.id}>{book.title}</option>)}
        </select>
        <button type="submit">Return Book</button>
      </form>
    </Layout>
  );
};

export default ReturnBook;
