import React from 'react';
import logo from './logo.svg';
import './App.css';

import logob2b from './logob2b.png';
import Card from './layout/Card';
import SignInForm from './forms/SignInForm';

function App() {
  return (
    <div className="mainContent">
      <Card src={logob2b}>
        <SignInForm/>
      </Card>
    </div>
  );
}

export default App;

/*<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>*/
