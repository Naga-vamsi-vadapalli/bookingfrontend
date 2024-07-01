import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Appointment Booking App</h1>
        <p>Your one-stop solution for managing appointments</p>
      </header>
      <section className="home-section">
        <h2>Get Started</h2>
        <p>Sign up or sign in to manage your appointments:</p>
        <div className="home-buttons">
          <Link to="/signup" className="home-button">Sign Up</Link>
          <Link to="/signin" className="home-button">Sign In</Link>
        </div>
      </section>
      <footer className="home-footer">
        <p>© 2024 Appointment Booking App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
