import React from "react";
import RegisterForm from "../../components/regiserform/RegisterForm";
import Login from "../login/Login";

// function Home() {
//   return (
//     <div>
//       <h1>This is the Home page</h1>
//       <RegisterForm />
//       <Login />
import SideBar from "../../side-bar/sideBar";
import Footer from "../../components/footer/footer";
import Feed from "../feed/feed";

function Home() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <SideBar />
        </div>
        <div>
          <h1>This is the Home page</h1>
        </div>
      </div>
      <RegisterForm />
      <Login />
      <Feed/>
      <Footer/>

    </div>
  );
}

export default Home;
