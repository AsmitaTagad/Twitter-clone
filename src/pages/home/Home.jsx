import React from "react";
// import Login from "../login/Login";
import SideBar from "../../side-bar/sideBar";
// import {Grid,Item} from '@mui/material';
// import RightSide from './rightSide';

function Home() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <SideBar />
        </div>
        <div>
         {/* <Login /> */}
        </div>
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
