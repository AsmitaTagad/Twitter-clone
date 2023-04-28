import React from "react";
// import Login from "../login/Login";
import SideBar from "../../side-bar/sideBar";
import RightSide from '../rightSide/RightSide';

function Home() {
  return (
   
      <div style={{ display: "flex",justifyContent:"space-between"}}>
        <div>
          <SideBar />
        </div>
        <div>
         {/* <Login /> */}
        </div>
       <div style={{marginRight:"1.5rem"}}>
      <RightSide/>
      </div>
    </div>
   
  );
}

export default Home;
