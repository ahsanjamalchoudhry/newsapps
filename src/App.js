import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
// import PropTypes from 'prop-types';
// import {
//   createBrowserRouter,
//   Router,
//   RouterProvider,
// } from "react-router-dom";

const App=()=> {
  return (
      <>
      <div>
          <Navbar />
          <News category={'science'} country={'us'}  />
        </div>
        </>
    )
  }
export default App
