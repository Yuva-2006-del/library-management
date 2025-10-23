import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { getBooks, issueBook } from '../lib/api';

const IssueBook = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ book_id: '', patron_name: '', issue_date: '', due_date: '' });

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data.filter(book => !book.is_issued));
    };
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await issueBook(form);
    alert('Book issued successfully!');
    setForm({ book_id: '', patron_name: '', issue_date: '', due_date: '' });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <select name="book_id" value={form.book_id} onChange={handleChange} required>
          <option value="">Select Book</option>
          {books.map(book => <option key={book.id} value={book.id}>{book.title}</option>)}
        </select>
        <input name="patron_name" placeholder="Patron Name" value={form.patron_name} onChange={handleChange} required />
        <input type="date" name="issue_date" value={form.issue_date} onChange={handleChange} required />
        <input type="date" name="due_date" value={form.due_date} onChange={handleChange} required />
        <button type="submit">Issue Book</button>
      </form>
    </Layout>
  );
};

export default IssueBook;
