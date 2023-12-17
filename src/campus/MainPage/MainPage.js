import React from 'react';
import "./MainPage.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className='a' style={{minHeight:'100vh'}}>
      <h1 className="text-primary text-center p-4" style={{textDecoration:'2px solid black'}}>VNRVJIET Online Stationery</h1>
      <div className="row justify-content-around">
        <div className="col-3 m-1 p-3 text-center bg-light"  style={{height:'75vh'}} >

          <img src="https://i.pinimg.com/originals/d9/86/e8/d986e85672b9dd3b7ad9625050cb66d6.jpg" className='w-50' alt="640 by 960" />
          <p className='p-5'>If you are a student, then login/sign up through the below link</p>
          <Link to="/studentlogin" className="student text-danger">Student</Link>
        </div>
        <div className="col-3 m-1 p-3 text-center bg-light" style={{height:'75vh'}}>
          <img src="https://i.pinimg.com/originals/d9/86/e8/d986e85672b9dd3b7ad9625050cb66d6.jpg" className='w-50' alt="640 by 960" />
          <p className='p-5'>If you are an Admin, then login through the below link</p>
          <Link to="/adminlogin" className="admin text-danger">Admin</Link>
        </div>
        <div className="col-3 m-1 p-3 text-center bg-light" style={{height:'75vh'}}>
          <img src="https://i.pinimg.com/originals/d9/86/e8/d986e85672b9dd3b7ad9625050cb66d6.jpg" className='w-50' alt="640 by 960" />
          <p className='p-5'>If you are a faculty, then login through the below link</p>
          <Link to="/facultylogin" className="admin text-danger">Faculty</Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
