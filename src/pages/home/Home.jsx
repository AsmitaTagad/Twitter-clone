import React from "react";
import SideBar from "../../side-bar/sideBar";


function Home() {
  return (
    <div style={{display : "flex"}}>
      <div>
       <SideBar/>
      </div>
<div>
    <h1>This is the Home page</h1>
</div>

    </div>
  );
}

export default Home;
