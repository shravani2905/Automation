// Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Studentsignup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (username && password && confirmPassword) {
      if (password === confirmPassword) {
        // Perform signup logic
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        setError("");
        setSignupSuccess(true); // Set signup success to true
        // You can navigate or perform any other action upon successful signup
      } else {
        setError("Passwords do not match.");
      }
    } else {
      setError("All fields are required.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1 className="signup">Student Sign Up</h1>

        {signupSuccess ? (
          <p className="success-message">Signup successful! You can now log in.</p>
        ) : (
          <form onSubmit={handleSignup}>
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
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">SIGN UP</button>
          </form>
        )}

        {error && <p className="error">{error}</p>}
        <p className="login">
          Already have an account? <Link to="/studentlogin">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
