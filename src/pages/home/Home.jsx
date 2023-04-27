import React from "react";
// import Login from "../login/Login";
import SideBar from "../../side-bar/sideBar";
import Navbar from "../../components/navbar/Navbar";
// import {Grid,Item} from '@mui/material';
// import RightSide from './rightSide';

function Home() {
  return (
    <div>
      <hr />
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: "1" }}>
          <SideBar />
        </div>

        <div
          style={{
            flexGrow: "4",
            border: "1px solid #DDDDDD",
            borderTop: "none",
          }}
        >
          <Navbar />
        </div>

        {/* content */}

        <div style={{ flexGrow: "3" }}>
          <h1>Sidebar</h1>
        </div>
        <div>{/* <Login /> */}</div>
      </div>
      {/* <RightSide/> */}
    </div>

    //     <Grid container spacing={2}>
    //   <Grid item xs={3} md={8}>
    //     <Item> <SideBar /> </Item>
    //   </Grid>
    //   <Grid item xs={6} md={4}>
    //     <Item> <Login /> </Item>
    //   </Grid>
    //   <Grid item xs={3} md={4}>
    //     <Item>right side</Item>
    //   </Grid>
    // </Grid>
  );
}

export default Home;
