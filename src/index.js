import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Create from './components/Create/Create.jsx';
import Edit from './components/Edit/Edit.jsx';

const checkIfAuthorized = () => {
  if (window.localStorage.getItem('rbs_login_hash') != null) return true;
  return false;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={checkIfAuthorized() ? <Home /> : <Login />} />
        <Route path="/create" element={ <Create /> } />
        <Route path="/edit/*" element={ <Edit /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
