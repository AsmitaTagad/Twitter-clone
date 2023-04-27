import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import RegisterForm from "./pages/register/RegisterForm";
import Login2 from "./pages/login/Login2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<RegisterForm/>} />
        <Route path="/loginto" element={<Login2/>} />
      </Routes>
    </div>
  );
}

export default App;
