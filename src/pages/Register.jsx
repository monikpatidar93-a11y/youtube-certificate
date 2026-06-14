import "../App.css";

function Register() {
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
          Student Registration
        </h2>

        <p className="welcome-text">
          Create your account
        </p>

        <input
          className="input"
          type="text"
          placeholder="Full Name"
        />

        <input
          className="input"
          type="email"
          placeholder="Email Address"
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
        />

        <button className="btn">
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;