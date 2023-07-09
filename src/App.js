import "./App.css";
import Homepage from "./homepage";
import Header from "./pages/header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Donate from "./pages/Donate";
import OurMission from "./pages/OurMission";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/ourmission" element={<OurMission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
