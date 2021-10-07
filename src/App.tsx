import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, useHistory } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/Navigation/NavigationBar';
import { Login } from './Components/Login/login';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';

const token = localStorage.getItem('token');

function App() {
  const [isLoggedIn] = useState(localStorage.getItem('token'));
  const history = useHistory();
  useEffect(() => {
    {
      token;
    }
  }, []);
  return (
    <BrowserRouter>
      {token ? (
        <div className="App">
          <NavigationBar />
        </div>
      ) : (
        <Route path="/">
          <Login />
        </Route>
      )}
    </BrowserRouter>
  );
}

export default App;
