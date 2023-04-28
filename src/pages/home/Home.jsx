import React, { useEffect } from "react";
// import Login from "../login/Login";
import SideBar from "../../side-bar/sideBar";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../atoms/card/Card";
import TweetCard from "../../atoms/card/Card";
// import {Grid,Item} from '@mui/material';
// import RightSide from './rightSide';
import Footer from "../../components/footer/footer";
import Feed from "../feed/feed";
import ProfileButton from "../../atoms/profilebutton/ProfileButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import RightSide from "../rightSide/RightSide";

function Home() {
  const isLogin = useSelector((state) => state.loginData.isLogin);
  const tweetsData = useSelector((state) => state.tweetData.tweets);
  // console.log(tweetsData);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    } else {
      navigate("/signin");
    }
  }, [isLogin]);

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
            width: "37%",
          }}
        >
          <Navbar />

          {tweetsData.map((tweet) => (
            <div key={tweet.id}>
              <TweetCard
                id={tweet.id}
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
          <RightSide />
        </div>
        <div>{/* <Login /> */}</div>
      </div>
      {/* <RightSide/> */}
      {/* <RegisterForm />
      <Login /> */}
      {/* <Feed /> */}
      {!isLogin && <Footer />}
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
