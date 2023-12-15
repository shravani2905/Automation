import React, { useState } from "react";
import "./AdminLogin.css";
import { Link } from "react-router-dom";
function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Both username and password are required.");
      return;
    }

    // Both username and password are provided, perform login logic
    console.log("Username:", username);
    console.log("Password:", password);
    setError("");
    // You can navigate or perform any other action upon successful login
  };

  const isSubmitDisabled = !(
    (username === "vnrvjiet" && password === "abc") ||
    (username === "22071A0555" && password === "bcd") ||
    (username === "22071A0522" && password === "cde")
  );

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login">Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="keepLoggedIn" name="keepLoggedIn" />
            <label htmlFor="keepLoggedIn">Keep me logged in</label>
          </div>
          <Link to="/adminupload">
            <button type="submit" disabled={isSubmitDisabled}>
              LOG IN
            </button>
          </Link>
        </form>
        {error && <p className="error">{error}</p>}
        <p className="signup">
          Don't have an account? <Link to="/Studentsignup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;