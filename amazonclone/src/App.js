import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      Hello world
      <Router>
          <Routes>
            <Route path='/we' element={<Home/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
