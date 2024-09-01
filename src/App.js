import "./App.css";
import Login from "./components/login.jsx"; // Ensure the file extension is correct if needed
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurants from "./components/restaurants.jsx";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Restaurants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
