import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import LandingPage from './Component/Home/LandingPage/LandingPage';


function App() {
  return (
    <BrowserRouter className="App">
      <Route path = "/" component = {LandingPage}/>
    </BrowserRouter>
  );
}

export default App;
