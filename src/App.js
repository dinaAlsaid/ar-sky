import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Layout from "./components/Layout";
import Company from "./views/Company";
import CompanyProfile from "./views/CompanyProfile";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/company" element={<Company />} />
            <Route path="/company/profile" exact element={<CompanyProfile />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
