import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./Componatos/Create";
import Edit from "./Componatos/Edit";
import Read from "./Componatos/Read";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/edit" element={<Edit />} />
          <Route path="/create" element={<Create />} />
          <Route exact path="/" element={<Read />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
