import React, { Fragment } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Product from './components/Product';
import { BrowserRouter, BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      {/* <Home/> */}
      <Router>
          <Routes>
            <Route path='/'
              element={
                <Fragment>
                    <Header/>
                    <Home/>
                    <Product/>
                </Fragment>
              }
            />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
