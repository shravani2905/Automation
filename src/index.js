import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import StudentPage from "./campus/StudentPage/StudentPage"
import AdminPage from "./campus/AdminPage/AdminPage"
import AdminLogin from "./campus/AdminLogin/AdminLogin"
import StudentLogin from "./campus/StudentLogin/StudentLogin"
import Print from "./campus/Print/Print"
import reportWebVitals from './reportWebVitals';
import Studentsignup from "./campus/Studentsignup/Studentsignup"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/studentlogin",
    element:<StudentLogin/>,
  },
  {
    path: "/print",
    element:<Print/>,
  },
  {
    path: "/adminlogin",
    element:<AdminLogin/>,
  },

  {
    path: "/student",
    element:<StudentPage/>,
  },
  {
    path: "/studentsignup",
    element:<Studentsignup/>,
  },
  {
    path: "/admin",
    element:<AdminPage/>,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

