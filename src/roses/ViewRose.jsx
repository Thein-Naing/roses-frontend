import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewRose = () => {
  const [rose, setRose] = useState({
    color: "",
    meaning: "",
    symbol: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getRose();
  }, []);

  const getRose = async () => {
    const response = await axios.get(`http://localhost:8080/rose/${id}`);
    setRose(response.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Rose Details</h2>
          <div className="card">
            <div className="card-header">
              Details of Rose : {rose.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Color: </b>
                  {rose.color}
                </li>
                <li className="list-group-item">
                  <b>Meaning: </b>
                  {rose.meaning}
                </li>
                <li className="list-group-item">
                  <b>Symbol: </b>
                  {rose.symbol}
                </li>
              </ul>
            </div>
          </div>
          <Link to={"/"} className="btn btn-primary my-2">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewRose;
