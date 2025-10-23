import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Library Management System</h1>
      {children}
    </div>
  );
};

export default Layout;
