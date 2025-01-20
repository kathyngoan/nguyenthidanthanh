import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FancyPage from "./pages/FancyPage";

const App = () => {
  return (
    <>
      
    <Router>
    <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/FancyPage" element={<FancyPage />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
    </>
   
  );
};

export default App;
