import React from 'react';
import './App.css';

function App() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <h2>MyApp</h2>
          </div>
          <ul className="navbar-links">
            <li> Home</li>
            <li> About</li>
            <li> Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      <header className="App-header">
        <h1>Hello, World!</h1>
        
        <button className="action-button" onClick={() => handleClick('Button 1 Clicked!')}>
          Button 1
        </button>
        <button className="action-button" onClick={() => handleClick('Button 2 Clicked!')}>
          Button 2
        </button>

        <div className="profile-card">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile" 
            className="profile-image" 
          />
          <h2>Poojan Parmar</h2>
          <p>Web Developer</p>
          <p>Email: poojanparmar25@example.com</p>
        </div>
      </header>
    </div>
  );
}

export default App;
