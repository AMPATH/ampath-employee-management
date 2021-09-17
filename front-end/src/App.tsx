import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Login from "./Components/Login/login";
import Register from './Components/Register/register';

function App() {
  return (
    <Router>
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/register/user" exact component={Register} />
    </div>
    </Router>
  );
};

export default App;
