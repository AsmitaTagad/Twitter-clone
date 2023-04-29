import React, { useEffect, useState } from "react";
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
import Twitter from "../tweett/Tweet";
import { Button } from "@mui/material";
function Home() {
  const isLogin = useSelector((state) => state.loginData.isLogin);
  const tweetsData = useSelector((state) => state.tweetData.tweets);
  const [show, setShow] = useState(10);
  const [localIsLogin, setLocalIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLoginUser")) || {}
  );
  console.log(tweetsData);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin || localIsLogin.isLocalLogin) {
      navigate("/");
    } else {
      navigate("/signin");
    }
  }, [isLogin]);

  const handleShowMore = () => {
    setShow(show + 5);
  };

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
          <Twitter />

          {tweetsData.slice(0, show).map((tweet) => (
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
                viewCount={tweet.viewCount}
                shareCount={tweet.shareCount}
              />
            </div>
          ))}
          <div>
            <Button
              sx={{ color: "#1D9BF0" }}
              variant="outline"
              onClick={handleShowMore}
            >
              Show more
            </Button>
          </div>
        </div>

        <div style={{ width: "33%" }}>
          <RightSide />
        </div>
      </div>
      {!isLogin && <Footer />}
    </div>
  );
}

export default Home;
