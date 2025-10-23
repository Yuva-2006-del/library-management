import React, { useState } from 'react';
import Layout from '../components/Layout';
import { addBook } from '../lib/api';

const AddBook = () => {
  const [form, setForm] = useState({ title: '', author: '', isbn: '', publication_year: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(form);
    alert('Book added successfully!');
    setForm({ title: '', author: '', isbn: '', publication_year: '' });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
        <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} required />
        <input name="publication_year" placeholder="Year" value={form.publication_year} onChange={handleChange} required />
        <button type="submit">Add Book</button>
      </form>
    </Layout>
  );
};

export default AddBook;
