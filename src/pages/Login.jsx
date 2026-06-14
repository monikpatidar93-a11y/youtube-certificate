import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    if (name.trim() === "") {
      alert("Please Enter Your Name");
      return;
    }

    localStorage.setItem("studentName", name);
    navigate("/dashboard");

  };

  return (
    <div className="container">

      <div className="card">

        {/* Logo */}
        <div className="logo-box">

          <div className="logo-circle">
            AS
          </div>

          <h1 className="school-name">
            APNA SCHOOL
          </h1>

          <p className="school-tagline">
            Excellence In Education
          </p>

        </div>

        <h2 className="welcome-title">
          Welcome Back
        </h2>

        <p className="welcome-text">
          Login to continue learning
        </p>

        <input
          className="input"
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input"
          type="email"
          placeholder="Enter Email"
        />

        <input
          className="input"
          type="password"
          placeholder="Enter Password"
        />

        <button
          className="btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <br />
        <br />

        <Link
          className="register-link"
          to="/register"
        >
          Create Account
        </Link>

      </div>

    </div>
  );
}

export default Login;
