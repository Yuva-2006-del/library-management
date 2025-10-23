import axios from 'axios';

const API_BASE = '/api/books';

export const getBooks = async () => {
  const res = await axios.get(API_BASE);
  return res.data;
};

export const addBook = async (book) => {
  const res = await axios.post(API_BASE, book);
  return res.data;
};

export const issueBook = async (data) => {
  const res = await axios.post(`${API_BASE}/issue`, data);
  return res.data;
};

export const returnBook = async (data) => {
  const res = await axios.post(`${API_BASE}/return`, data);
  return res.data;
};
