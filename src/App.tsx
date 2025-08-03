import React from 'react';
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="page-actions">
          <span>Email: syedzaidahmad99@gmail.com</span>
          <span>Mob: +91 8585971473 / +91 8826210811</span>
          <a href="https://drive.google.com/file/d/1tyfLAMEaBwdq2_gdJhn9lJ7nAdVsDRug/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
        </div>
        <Profile />
      </header>
    </div>
  );
}

export default App;
