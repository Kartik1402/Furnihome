import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <div className="logo">
            <span className="logo-icon">⚠</span>
            <span className="logo-text">Furniro</span>
          </div>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#shop">Shop</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-actions">
          <button className="action-btn"><i className="icon">👤</i></button>
          <button className="action-btn"><i className="icon">🔍</i></button>
          <button className="action-btn"><i className="icon">❤</i></button>
          <button className="action-btn"><i className="icon">🛒</i></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

