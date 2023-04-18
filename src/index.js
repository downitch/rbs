import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import About from './components/About/About.jsx';

const checkIfAuthorized = () => {
  if (window.localStorage.getItem('rbs_login_hash') != null) return true;
  return false;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={checkIfAuthorized() ? <Home /> : <Login />}>
      <Route path="about" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
