import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import RegisterForm from "./pages/register/RegisterForm";
import Login2 from "./pages/login/Login2";
import Front from "./pages/front/Front";
import { Provider } from "react-redux";
import { store } from "./assets/redux/ReduxData";
// import "./pages/front/Front.module.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          {/* <Route path="/signup" element={<Register />} /> */}
          <Route path="/loginto" element={<Login2 />} />
          <Route path="/signup" element={<Front />} />

          {/* <Route path="/signup" element={<RegisterForm/>} /> */}
          {/* <Route path="/loginto" element={<Login2 />} /> */}
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
