import "./App.css";
import Categories from "./Components/Categories";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import Register from "./Components/register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
