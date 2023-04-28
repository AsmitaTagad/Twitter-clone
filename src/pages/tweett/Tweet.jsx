import React, { useState, useRef } from 'react';
 import { Photo, Gif, Poll, EmojiEmotions, Schedule } from '@mui/icons-material';
 import { IconButton } from '@mui/material';
 import EmojiPicker from 'react-emoji-picker';
 import styles from './Tweet.module.css';
 import { Avatar } from '@mui/material';


function Tweeter() {
  const [mediaFile, setMediaFile] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  const handleMediaUpload = (event) => {
    setMediaFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  function handleOnSelectImage(e) {
    let reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleUploadClick = () => {
    // Include the media file in the new tweet object only if it exists
    const newTweet = {
      message: message + (selectedEmoji ? selectedEmoji : ''),
      image: image,
      mediaFile: mediaFile ? mediaFile : null,
    };
    setTweets([newTweet, ...tweets]);
    setMessage('');
    setImage(null);
    setSelectedEmoji(null);
    setShowEmojiPicker(false);
    setMediaFile(null); // Reset media file after posting the tweet
  };

  return (
    <div className={styles.twitterui}>
      <div className={styles.leftpanel}>
         <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> 
      </div>
      <div className={styles.maincontent}>
        <div contentEditable={true} />
        <div className={styles.whatshappening}>
          <textarea
            placeholder="What's happening?"
            value={message + (selectedEmoji ? selectedEmoji : '')}
            onChange={handleInputChange}
            style={{ border: 'none', resize: 'none', width: '100%', height: '100px' }}
          />
          {image && (
            <div className={styles.imagePreviewContainer}>
              <img src={image} alt="tweet-pic" className={styles.imagePreview} />
            </div>
          )}
          <div className={styles.iconlist}>
            <label htmlFor="media-upload">
              <input id="media-upload" type="file" onChange={handleMediaUpload} style={{ display: 'none' }} />
              <IconButton component="span" style={{ color: "#1DA1F2" }}><Photo /></IconButton>
            </label>
            <IconButton style={{ color: " #1DA1F2" }}><Gif /></IconButton>
            <IconButton style={{ color: " #1DA1F2" }}><Poll /></IconButton>
            <IconButton style={{ color: " #1DA1F2" }}><Schedule /></IconButton>
            <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)} style={{ color: " #1DA1F2" }}>

              <EmojiEmotions />
              
               
            </IconButton>
           <div className={styles.btn}>
            <button className={styles.tweetbtn} onClick={handleUploadClick}>Tweet</button>
            </div>
          </div>
           <input
            type="text"
            
ref={inputRef}
onChange={handleOnSelectImage}
style={{ display: 'none' }}
/>
</div>
{showEmojiPicker && (
<EmojiPicker
onEmojiClick={(event, emojiObject) => setSelectedEmoji(emojiObject.emoji)}
pickerStyle={{ position: 'absolute', bottom: '70px', right: '10px', zIndex: '1' }}
/>
)}
{tweets.map((tweet, index) => (
<div key={index} className={styles.tweet}>
<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
<div className={styles.tweetcontent}>
<p>{tweet.message}</p>
{tweet.image && (
<div className={styles.tweetimagecontainer}>
<img src={tweet.image} alt="tweet-pic" className={styles.tweetimage} />
</div>
)}
{tweet.mediaFile && (
<div className={styles.tweetfilecontainer}>
<span>{tweet.mediaFile.name}</span>
</div>
)}
</div>
</div>
))}
</div>
</div>
);
}

export default Tweeter;