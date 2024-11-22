import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./Body";
import Login from "./Login";
import Details from "./Details";
import ProtectedRoute from "./ProtectedRoute";
import Accordian from "./Accordian";

function App() {
  return (
    <div>
      <header>
        Hello world
        <nav>
          <a href="/">Home</a>
          <a href="/Login">Login</a>
          <a href="/Details">Details</a>
          <a href="/Accordian">Accordian</a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Accordian" element={<Accordian />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/Details" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
