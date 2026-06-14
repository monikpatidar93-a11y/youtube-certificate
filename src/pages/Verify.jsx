import { useParams } from "react-router-dom";
import "../App.css";

function Verify() {

  const { id } = useParams();

  return (

    <div className="container">

      <div className="card">

        <h1 className="title">
          Certificate Verified ✅
        </h1>

        <p>
          Certificate ID:
        </p>

        <h3>{id}</h3>

        <br />

        <p>
          Issued By Apna School
        </p>

      </div>

    </div>

  );

}

export default Verify;