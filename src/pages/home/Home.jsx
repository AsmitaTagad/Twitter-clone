import React, { useEffect } from "react";
// import Login from "../login/Login";
import SideBar from "../../side-bar/sideBar";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../atoms/card/Card";
import TweetCard from "../../atoms/card/Card";
import tweetsData from "../../assets/data/tweets.json";
// import {Grid,Item} from '@mui/material';
// import RightSide from './rightSide';

function Home() {
  // console.log(tweetsData);
  return (
    <div>
      <hr />
      <div style={{ display: "flex" }}>
        <div
          style={{
            // flexGrow: "1",
            width: "30%",
          }}
        >
          <SideBar />
        </div>

        <div
          style={{
            // flexGrow: "4",
            border: "1px solid #DDDDDD",
            borderTop: "none",
            width: "fit-content",
          }}
        >
          <Navbar />

          {tweetsData.map((tweet) => (
            <div key={tweet.id}>
              <TweetCard
                commentCount={tweet.commentCount}
                content={tweet.content}
                createAt={tweet.createdAt}
                image={tweet.image}
                isLiked={tweet.isLiked}
                likeCount={tweet.likeCount}
                reTweetsCount={tweet.reTweetsCount}
                tweetedBy={tweet.tweetedBy}
              />
            </div>
          ))}
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
