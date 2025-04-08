import React, { useState } from "react";
import './LoginForm.css';
import { FaUserCircle, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (email.trim() === "" || password.trim() === "") {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Ager</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUserCircle className="icon" />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="register-link">
          <p>Don't have an account? <a href="#">Sign up!</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
