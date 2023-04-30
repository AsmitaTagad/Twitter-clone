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
import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import style from "./Home.module.css";
import ResFooter from "../../components/resfooter/ResFooter";
import { AiFillPlusCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import Tweeter from "../tweett/Tweet";

function Home() {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [open, setOpen] = React.useState(false);
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
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
          className={style.sidebar}
        >
          <SideBar />
        </div>

        <div className={style.mainContent}>
          <Navbar />
          <div className={style.tweetcontainer}>
            <Twitter />
          </div>

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

        <div style={{ width: "33%" }} className={style.rightside}>
          <RightSide />
        </div>
      </div>
      <div className={style.logFooter}>{!isLogin && <Footer />}</div>
      <div className={style.resfooter}>
        <ResFooter />
      </div>
      <div className={style.tweeticon}>
        <AiFillPlusCircle color="rgb(29, 155, 240)" onClick={handleClickOpen} />
      </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <Button onClick={handleClose}>
            <GrFormClose fontSize={30} />
          </Button>
        </DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <Tweeter />
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Home;
