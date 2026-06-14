import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "../App.css";

function Certificate() {

  const studentName =
    localStorage.getItem("studentName") ||
    "Student Name";

  const [password, setPassword] = useState("");
  const [showCertificate, setShowCertificate] =
    useState(false);

  const certificateId =
    "APS-" +
    Math.floor(
      100000 + Math.random() * 900000
    );

  const today = new Date().toLocaleDateString();

  const verifyPassword = () => {

    if (password === "APNA123") {
      setShowCertificate(true);
    } else {
      alert("Wrong Password");
    }

  };

  return (
    <div className="container">

      {!showCertificate ? (

        <div className="card">

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
            Generate Certificate
          </h2>

          <p className="welcome-text">
            Student: {studentName}
          </p>

          <input
            className="input"
            type="password"
            placeholder="Teacher Password"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="btn"
            onClick={verifyPassword}
          >
            Generate Certificate
          </button>

        </div>

      ) : (

        <div className="certificate">

          <div className="seal">
            VERIFIED
          </div>

          {/* LOGO */}

          <div className="logo-box">

            <div className="logo-circle">
              AS
            </div>

            <h2 className="school-name">
              APNA SCHOOL
            </h2>

            <p className="school-tagline">
              Excellence In Education
            </p>

          </div>

          <h1>
            CERTIFICATE
          </h1>

          <h4>
            Certificate Of Completion
          </h4>

          <br />

          <p>
            This Certificate Is Proudly Awarded To
          </p>

          <h2>
            {studentName}
          </h2>

          <p>
            For Successfully Completing
          </p>

          <h3>
            Python Programming Course
          </h3>

          {/* COURSE DETAILS */}

          <div className="course-info">

            <div className="info-box">
              <strong>Duration</strong>
              <br />
              40 Hours
            </div>

            <div className="info-box">
              <strong>Grade</strong>
              <br />
              A+
            </div>

            <div className="info-box">
              <strong>Status</strong>
              <br />
              Passed
            </div>

          </div>

          <p className="cert-id">
            Certificate ID:
            {" "}
            {certificateId}
          </p>

          <p>
            Issue Date:
            {" "}
            {today}
          </p>

          {/* QR + VERIFIED BADGE */}

          <div className="bottom-row">

            <QRCodeCanvas
              value={`https://apnaschool.com/verify/${certificateId}`}
              size={120}
            />

            <div className="gold-badge">
              ★ VERIFIED ★
            </div>

          </div>

          {/* SIGNATURES */}

          <div className="signature-area">

            <div className="signature-box">

              <div className="signature-text">
                Monik Patidar
              </div>

              <hr />

              <p>
                Instructor
              </p>

            </div>

            <div className="signature-box">

              <div className="signature-text">
                Monik Patidar
              </div>

              <hr />

              <p>
                Director
              </p>

            </div>

          </div>

          <br />

          <button
            className="btn"
            onClick={() => window.print()}
          >
            Download Certificate
          </button>

        </div>

      )}

    </div>
  );

}

export default Certificate;