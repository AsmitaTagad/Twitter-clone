import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faHashtag,faBell,faBookmark,faUser,faCircleDot,} from '@fortawesome/free-solid-svg-icons'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from "./sideBar.module.css"
import { AiOutlineTwitter  } from 'react-icons/ai';



function SideBar() {
  return (
    <div className={styles.sidebarOption}>


 {
/* <!-- sidebar starts  MUI--> (two icon varified organisation and twitter blue is missing)  */}
    
    <AiOutlineTwitter className={styles.Icon}/>

<div className={styles.sliderDetails}>
  <button className={styles.Home}>  <HomeIcon/><a>Home</a> </button> <br/>
  <button className={styles.Explore}>   <TagIcon/> <a>Explore</a> </button>   <br/>
  <button className={styles.Notifications}> <NotificationsIcon/> <a>Notifications</a> </button>    <br/>
  <button className={styles.Messages}>  <MailOutlineIcon/> <a>Messages</a> </button>    <br/>
  <button className={styles.Bookmarks}>    <BookmarkBorderIcon/> <a>Bookmarks</a>  </button>    <br/>
  <button className={styles.Profile}> <PersonOutlineIcon/> <a>Profile</a> </button>    <br/>
  <button  className={styles.More}>      <MoreHorizIcon/> <a>More</a> </button>    <br/> 
  </div>
  <button className={styles.TweetButton}>Tweet</button>
   </div>
  );
}

export default SideBar;