import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Specialists from "./components/Specialists";

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <button onClick={() => navigate("/about")}>click</button> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<Specialists/>}
        />
      </Routes>
    </div>
  );
};

export default App;
