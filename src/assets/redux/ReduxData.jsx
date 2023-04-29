import { configureStore, createSlice } from "@reduxjs/toolkit";
import { userName } from "../../atoms/profilebutton/ProfileButton";

export const registerUsersDataSlice = createSlice({
  name: "registerUsersData",
  initialState: {
    loginUsersData: JSON.parse(localStorage.getItem("userData")) || [],
  },
  reducers: {},
});

export const loginOrNotSlice = createSlice({
  name: "loginData",
  initialState: {
    isLogin: false,
  },
  reducers: {
    userLogin: (state, action) => {
      const { phone, pass } = action.payload;
      state.isLogin = true;
      localStorage.setItem(
        "isLoginUser",
        JSON.stringify({
          isLocalLogin: state.isLogin,
          phone: phone,
          pass: pass,
        })
      );
    },
    userLogout: (state) => {
      state.isLogin = false;
      localStorage.setItem(
        "isLoginUser",
        JSON.stringify({
          isLocalLogin: state.isLogin,
          phone: "",
          pass: "",
        })
      );
    },
  },
});

export const tweetDataSlice = createSlice({
  name: "tweetData",
  initialState: {
    tweets: [],
  },
  reducers: {
    fetchTweets: (state, actions) => {
      const tempData = [...actions.payload];
      const newData = tempData.map((item) => {
        return {
          ...item,
          viewCount: parseInt((Math.random() * 1000).toFixed(0)),
          shareCount: parseInt((Math.random() * 1000).toFixed(0)),
        };
      });
      // console.log("Hello", newData);
      state.tweets.push(...newData);
    },
    addNewTweet: (state, actions) => {
      const content = actions.payload;
      const newTweet = {
        commentCount: parseInt((Math.random() * 1000).toFixed(0)),
        content: content,
        createdAt: new Date().toDateString(),
        id: new Date(),
        image: `https://picsum.photos/1000/500?q=${state.tweets.length + 1}`,
        isLiked: false,
        likeCount: parseInt((Math.random() * 1000).toFixed(0)),
        reTweetsCount: parseInt((Math.random() * 1000).toFixed(0)),
        shareCount: parseInt((Math.random() * 1000).toFixed(0)),
        tweetedBy: { id: new Date(), name: userName },
        viewCount: parseInt((Math.random() * 1000).toFixed(0)),
      };

      state.tweets.unshift(newTweet);
    },
    addLike: (state, action) => {
      const id = action.payload;
      const tempData = state.tweets.find((item) => item.id == id);
      if (tempData.isLiked) {
        tempData.likeCount -= 1;
        tempData.isLiked = !tempData.isLiked;
      } else {
        tempData.likeCount += 1;
        tempData.isLiked = !tempData.isLiked;
      }
    },
    addComment: (state, action) => {
      const id = action.payload;
      const tempData = state.tweets.find((item) => item.id == id);
      tempData.commentCount += 1;
    },
    addReTweetCount: (state, action) => {
      const id = action.payload;
      const tempData = state.tweets.find((item) => item.id == id);
      tempData.reTweetsCount += 1;
    },
    addViewCount: (state, action) => {
      const id = action.payload;
      const tempData = state.tweets.find((item) => item.id == id);
      tempData.viewCount += 1;
    },
    addShareCount: (state, action) => {
      const id = action.payload;
      const tempData = state.tweets.find((item) => item.id == id);
      tempData.shareCount += 1;
    },
  },
});

export const store = configureStore({
  reducer: {
    [loginOrNotSlice.name]: loginOrNotSlice.reducer,
    [tweetDataSlice.name]: tweetDataSlice.reducer,
    [registerUsersDataSlice.name]: registerUsersDataSlice.reducer,
  },
});
