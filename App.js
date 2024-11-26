import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./Body";
import Login from "./Login";
import Details from "./Details";
import ProtectedRoute from "./ProtectedRoute";
import Accordian from "./Accordian";
import Stepper from "./Stepper";

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
          <a href="/Stepper">Stepper</a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Accordian" element={<Accordian />} />
          <Route path="/stepper" element={<Stepper />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/Details" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
