import React from 'react';
import './Home.css';
import logo from '../../assets/images/logo.svg'; // Adjust the path according to your logo location

const Home = () => {
  return (
    <div className="home-container">
      <div className="logo-section">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <div className="auth-buttons">
        <button onClick={() => window.location.href='/login'} className="auth-btn login">
          Login
        </button>
        <button onClick={() => window.location.href='/register'} className="auth-btn register">
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;