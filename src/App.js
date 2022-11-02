import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Resume from "./Routes/Resume";
import Photography from "./Routes/Photography";
import Navigation from "./Components/Navigation";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes basename="/justin-danglade">
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
