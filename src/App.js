import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackProvider from "./context/FeedbackProvider";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

import Header from "./components/Header";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
