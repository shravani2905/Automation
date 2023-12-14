import React from 'react';
import "./MainPage.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <h1 className="text-primary text-center">VNRVJIET Online Stationary</h1>
      <div className="container row">
        <h2 className="col-6 p-5 text-center student bg-light"><Link to="/studentlogin" className="student text-danger">Student</Link></h2>
        <h2 className="col-6 p-5 text-center admin bg-light "><Link to="/adminlogin" className="admin text-danger">Admin</Link></h2>
      </div>
    </div>
  );
}

export default MainPage;
