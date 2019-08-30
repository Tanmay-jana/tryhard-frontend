import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Component/Home/Home';


function App() {
  return (
    <BrowserRouter className="App">
      <Route path = "/" component = {Home} exact/>
    </BrowserRouter> 
  );
}

export default App;
