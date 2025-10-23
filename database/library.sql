CREATE DATABASE library;

USE library;

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  isbn VARCHAR(50) UNIQUE,
  publication_year YEAR,
  is_issued BOOLEAN DEFAULT FALSE
);

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  book_id INT NOT NULL,
  patron_name VARCHAR(255),
  issue_date DATE,
  due_date DATE,
  return_date DATE,
  FOREIGN KEY (book_id) REFERENCES books(id)
);
