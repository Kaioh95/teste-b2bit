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

