import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
// import { MdOutlineLeaderboard } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { FcLike } from "react-icons/fc";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Stle from "./Card.module.css";
import { useDispatch } from "react-redux";
import { tweetDataSlice } from "../../assets/redux/ReduxData";

export default function TweetCard(props) {
  const dispatch = useDispatch();

  const handleLike = (id) => {
    dispatch(tweetDataSlice.actions.addLike(id));
  };
  const handleComment = (id) => {
    dispatch(tweetDataSlice.actions.addComment(id));
  };
  const handleReTweet = (id) => {
    dispatch(tweetDataSlice.actions.addReTweetCount(id));
  };
  const handleViewCount = (id) => {
    dispatch(tweetDataSlice.actions.addViewCount(id));
  };
  const handleShareCount = (id) => {
    dispatch(tweetDataSlice.actions.addShareCount(id));
  };

  return (
    <Card
      sx={{
        // maxWidth: 645
        width: "100%",
        border: "1px solid #DDDDDD",
      }}
      className={Stle.card}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {/* R */}
            <img src={props.image} alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.tweetedBy.name}
        subheader={props.createAt}
        sx={{ textAlign: "start" }}
      />
      <CardContent>
        <Typography
          sx={{ textAlign: "start" }}
          variant="body2"
          color="text.secondary"
        >
          {props.content}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="294"
        image={props.image}
        alt="Paella dish"
        sx={{
          width: "400px",
          borderRadius: "20px",
          margin: "auto",
        }}
        onDoubleClick={() => handleLike(props.id)}
      />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <IconButton
          aria-label="comment"
          sx={{ fontSize: "17px" }}
          className={Stle.commit}
        >
          <FaRegComment onClick={() => handleComment(props.id)} /> &nbsp; &nbsp;{" "}
          {props.commentCount}
        </IconButton>
        <IconButton
          aria-label="retweet"
          sx={{ fontSize: "17px" }}
          className={Stle.retweet}
        >
          <AiOutlineRetweet onClick={() => handleReTweet(props.id)} /> &nbsp;
          &nbsp; {props.reTweetsCount}
        </IconButton>
        <IconButton
          aria-label="add to favorites"
          sx={{ fontSize: "17px" }}
          className={Stle.fav}
        >
          {props.isLiked ? (
            <FcLike onClick={() => handleLike(props.id)} />
          ) : (
            <FcLikePlaceholder onClick={() => handleLike(props.id)} />
          )}
          &nbsp; &nbsp; {props.likeCount}
        </IconButton>
        <IconButton
          aria-label="view"
          sx={{ fontSize: "17px" }}
          className={Stle.view}
        >
          <IoIosStats onClick={() => handleViewCount(props.id)} /> &nbsp; &nbsp;{" "}
          {props.viewCount}
        </IconButton>
        <IconButton
          aria-label="view"
          sx={{ fontSize: "17px" }}
          className={Stle.share}
        >
          <FiShare onClick={() => handleShareCount(props.id)} /> &nbsp; &nbsp;{" "}
          {props.shareCount}
        </IconButton>
      </div>

      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
