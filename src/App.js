import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import RegisterForm from "./pages/register/RegisterForm";
import Login2 from "./pages/login/Login2";
import Front from "./pages/front/Front";
import { Provider, useDispatch } from "react-redux";
import { store, tweetDataSlice } from "./assets/redux/ReduxData";
import { useEffect, useState } from "react";
// import "./pages/front/Front.module.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("/tweets.json")
      .then((res) => res.json())
      .then((data) => dispatch(tweetDataSlice.actions.fetchTweets(data)));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/loginto" element={<Login2 />} />
        <Route path="/signup" element={<Front />} />
      </Routes>
    </div>
  );
}

export default App;
