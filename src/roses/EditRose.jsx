import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditRose = () => {
  const navigate = useNavigate();

  const [rose, setRose] = useState({
    color: "",
    meaning: "",
    symbol: "",
  });

  const { color, meaning, symbol } = rose;
  const { id } = useParams();

  useEffect(() => {
    getRose();
  }, []);

  const onChange = (e) => {
    setRose({ ...rose, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/rose/${id}`, rose);
    navigate("/");
  };

  const getRose = async () => {
    const response = await axios.get(`http://localhost:8080/rose/${id}`);
    setRose(response.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Rose</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3"></div>
            <label htmlFor="color" className="form-label"></label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter the color"
              name="color"
              value={color}
              onChange={(e) => onChange(e)}
            />

            <div className="mb-3"></div>
            <label htmlFor="meaning" className="form-label"></label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter the meaning"
              name="meaning"
              value={meaning}
              onChange={(e) => onChange(e)}
            />

            <div className="mb-3"></div>
            <label htmlFor="symbol" className="form-label"></label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter the symbol"
              name="symbol"
              value={symbol}
              onChange={(e) => onChange(e)}
            />
            <button type="submit" className="btn btn-outline-primary mx-2">
              Submit
            </button>
            <Link to="/" className="btn btn-outline-danger mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditRose;
