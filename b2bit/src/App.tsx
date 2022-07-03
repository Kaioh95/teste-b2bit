import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

const Pages = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <LoginPage /> },
    // ...
  ]);
  return routes;
};

function App() {
  return (
    <div className="mainContent">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>

          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*

<div className="mainContent">
  <Card src={logob2b}>
    <SignInForm/>
  </Card>
</div>

<Router>
    <div className='mainContent'>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>

        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
</Router>

<div className="App">
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
