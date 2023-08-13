import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={"This is Home Page"} />
          <Route path="/create" element={"This is Create Page"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
