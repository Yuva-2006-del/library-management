import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by title, author, or ISBN..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: '8px',
        width: '100%',
        marginBottom: '20px',
        borderRadius: '6px',
        border: '1px solid #ccc'
      }}
    />
  );
};

export default SearchBar;
