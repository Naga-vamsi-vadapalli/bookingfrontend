import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Appointment Booking</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/history">History</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
