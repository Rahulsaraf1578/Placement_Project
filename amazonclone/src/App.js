import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter, BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Router>
          <Routes>
            <Route path='/' element={((<Home/>),(<Header/>))}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
