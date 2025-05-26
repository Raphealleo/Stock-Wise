import React from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">People App</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">List</a>
      </div>
    </nav>
  );
}

export default Navbar;
