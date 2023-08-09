import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [roses, setRoses] = useState([]);
  const { id } = useParams;

  useEffect(() => {
    getAllRoses();
  }, []);

  const getAllRoses = async () => {
    const response = await axios.get("http://localhost:8080/allRoses");
    // console.log(response.data)
    setRoses(response.data);
  };

  const deleteRose = async (id) => {
    const response = await axios.delete(`http://localhost:8080/rose/${id}`);
    getAllRoses();
  };

  return (
    <table className="table border shadow">
      <thead>
        <tr>
          <th scope="col">Sr.No</th>
          <th scope="col">Color</th>
          <th scope="col">Meaning</th>
          <th scope="col">Symbol</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {roses.map((rose, index) => (
          <tr>
            <th scope="row" key={index}>
              {index + 1}
            </th>
            <td className="text-start">{rose.color}</td>
            <td className="text-start">{rose.meaning}</td>
            <td className="text-start">{rose.symbol}</td>
            <td>
              <Link
                to={`/viewrose/${rose.id}`}
                className="btn btn-outline-success mx-2"
              >
                View
              </Link>
              <Link
                to={`/editRose/${rose.id}`}
                className="btn btn-outline-primary mx-2"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteRose(rose.id)}
                className="btn btn-outline-danger mx-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Home;
