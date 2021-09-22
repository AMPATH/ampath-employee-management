import React from 'react';
import ReactDOM from 'react-dom';
import NavbarScroller from './Components/Navigation/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarScroller />
      </div>
    </BrowserRouter>
  );
}

export default App;
