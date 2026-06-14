import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {

  const studentName =
    localStorage.getItem("studentName") ||
    "Student";

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("studentName");
    navigate("/");

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
          Welcome, {studentName}
        </h2>

        <p className="welcome-text">
          Manage your learning journey
        </p>

        <Link
          to="/certificate"
          style={{ textDecoration: "none" }}
        >
          <button className="btn dashboard-btn">
            🏆 Get Certificate
          </button>
        </Link>

        <br />
        <br />

        <button
          className="btn logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default Dashboard;