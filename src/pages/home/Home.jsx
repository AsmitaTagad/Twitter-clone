import React from "react";
import RegisterForm from "../../components/regiserform/RegisterForm";
import Login from "../login/Login";

function Home() {
  return (
    <div>
      <h1>This is the Home page</h1>
      <RegisterForm />
      <Login />
    </div>
  );
}

export default Home;
