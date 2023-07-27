import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
