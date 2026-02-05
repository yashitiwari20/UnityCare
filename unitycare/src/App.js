import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Healthcare from "./pages/Healthcare";
import MentalHealth from "./pages/MentalHealth";
import InformationHub from "./pages/InformationHub";
import Community from "./pages/Community";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/information" element={<InformationHub />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
