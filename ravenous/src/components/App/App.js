import React from 'react';
import logo from './../../favicon.ico';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <p>
          Stay Focussed Stu
        </p>
        <a
          className="App-link"
          href="https://www.rabbitohs.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rabbitohs
        </a>
      </header>
    </div>
  );
}

export default App;
