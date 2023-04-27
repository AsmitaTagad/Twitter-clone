import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Login2 from "./pages/login/Login2";
import Front from "./pages/front/Front";
// import "./pages/front/Front.module.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        {/* <Route path="/signup" element={<Register />} /> */}
        <Route path="/loginto" element={<Login2 />} />
        <Route path="/signup" element={<Front />} />
      </Routes>
    </div>
  );
}

export default App;
