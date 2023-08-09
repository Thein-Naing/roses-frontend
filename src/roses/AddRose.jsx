import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddRose = () => {
  const navigate = useNavigate();

  const [rose, setRose] = useState({
    color: "",
    meaning: "",
    symbol: "",
  });

  const { color, meaning, symbol } = rose;

  const onChange = (e) => {
    setRose({ ...rose, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/addRose", rose);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Rose</h2>
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
            <button type="submit" className="btn btn-outline-primary py-2 mx-2">
              Submit
            </button>
            <Link to="/" className="btn btn-outline-danger py-2 mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRose;
