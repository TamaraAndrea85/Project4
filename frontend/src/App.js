import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import "./index.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
