import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddRose from "./roses/AddRose";
import EditRose from "./roses/EditRose";
import ViewRose from "./roses/ViewRose";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addrose" element={<AddRose />} />
          <Route path="/editrose/:id" element={<EditRose />} />
          <Route path="/viewrose/:id" element={<ViewRose />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
