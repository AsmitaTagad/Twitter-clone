import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faHashtag,faBell,faBookmark,faUser,faCircleDot,} from '@fortawesome/free-solid-svg-icons'
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./sideBar.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import ProfileButton from "../atoms/profilebutton/ProfileButton";
import BasicPopover from "../atoms/profilebutton/ProfileButton";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Tweeter from "../pages/tweett/Tweet";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router";

function SideBar() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <div className={styles.sidebarOption}>
      {/* <!-- sidebar starts  MUI--> (two icon varified organisation and twitter blue is missing)  */}

      <AiOutlineTwitter className={styles.Icon} onClick={() => navigate("/")} />

      <div className={styles.sliderDetails}>
        <button className={styles.Home}>
          {" "}
          <HomeIcon />
          <a>Home</a>{" "}
        </button>{" "}
        <br />
        <button className={styles.Explore}>
          {" "}
          <TagIcon /> <a>Explore</a>{" "}
        </button>{" "}
        <br />
        <button className={styles.Notifications}>
          {" "}
          <NotificationsIcon /> <a>Notifications</a>{" "}
        </button>{" "}
        <br />
        <button className={styles.Messages}>
          {" "}
          <MailOutlineIcon /> <a>Messages</a>{" "}
        </button>{" "}
        <br />
        <button className={styles.Bookmarks}>
          {" "}
          <BookmarkBorderIcon /> <a>Bookmarks</a>{" "}
        </button>{" "}
        <br />
        <button className={styles.Profile}>
          {" "}
          <PersonOutlineIcon /> <a>Profile</a>{" "}
        </button>{" "}
        <br />
        <button className={styles.More}>
          {" "}
          <MoreHorizIcon /> <a>More</a>{" "}
        </button>{" "}
        <br />
      </div>
      <button className={styles.TweetButton} onClick={handleClickOpen}>
        Tweet
      </button>
      <ProfileButton />

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

export default SideBar;
