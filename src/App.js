import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import ContactMe from "./components/pages/ContactMe";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<ContactMe/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
