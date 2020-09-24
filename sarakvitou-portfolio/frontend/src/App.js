import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const FOOTER_STRING = "Designed By Sarakvitou Sam"
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
      </header>
      <footer className= "App-footer" style= {{paddingLeft: FOOTER_STRING.innerWidth }}>
        {FOOTER_STRING}
      </footer>
    </div>
  );
}

export default App;
