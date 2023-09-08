import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Login from './Singup-Login/Login'
import Singup from './Singup-Login/Singup';
import Dashboard from './Dashboard';
import UserData from './Component/UserData';
import AntDesing from './Component/AntDesing';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singup",
    element: <Singup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/userdata",
    element: <UserData />,
  },
  {
    path: "/antdesing",
    element: <AntDesing />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


