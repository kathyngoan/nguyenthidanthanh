import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import WayToSumPage from "./pages/WayToSumPage";
import FancyPage from "./pages/FancyPage";
import MessyReactPage from "./pages/MessyReactPage";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, 
    });
  }, []);
  return (
    <>
      
    <Router>
    <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/WayToSumPage" element={<WayToSumPage />} />
          <Route path="/FancyPage" element={<FancyPage />} />
          <Route path="/MessyReactPage" element={<MessyReactPage />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
    </>
   
  );
};

export default App;
