import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/home/index";
import Details from "./pages/details/index";
import Favorites from "./pages/favorites/index";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
