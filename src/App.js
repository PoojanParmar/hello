import React from 'react';
import './App.css';

function App() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div className="App">
    

      <header>
        <h1>Hello, World!</h1>
        
        <button className="action-button" onClick={() => handleClick('Button 1 Clicked!')}>
          Button 1
        </button>
        <button className="action-button" onClick={() => handleClick('Button 2 Clicked!')}>
          Button 2
        </button>

        <div className="profile-card">
          <h2>Poojan Parmar</h2>
          <p>Software Developer</p>
          <p>Email: poojanparmar25@example.com</p>
        </div>
      </header>
    </div>
  );
}

export default App;
