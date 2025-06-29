import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import AboutPage from "./components/About/AboutPage";
import PropertyPage from "./components/Property/PropertyPage";
import NavContactPage from "./components/NavContact/NavContactPage";

function App() {
  return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Uncomment and add these as needed */}
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/PropertyPage" element={<PropertyPage />} />
            <Route path="/NavContactPage" element={<NavContactPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
  );
}

export default App;
