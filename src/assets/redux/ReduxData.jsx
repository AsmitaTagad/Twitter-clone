import { configureStore, createSlice } from "@reduxjs/toolkit";

export const loginOrNotSlice = createSlice({
  name: "loginData",
  initialState: {
    isLogin: false,
  },
  reducers: {
    userLogin: (state) => {
      state.isLogin = true;
    },
    userLogout: (state) => {
      state.isLogin = false;
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
      state.tweets.push(...actions.payload);
    },
    addLike: (state, action) => {
      const id = action.payload;
      const tempData = state.tweets.find((item) => item.id == id);
      tempData.likeCount += 1;
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
      tempData.likeCount += 1;
    },
    addShareCount: (state, action) => {
      const id = action.payload;
      const tempData = state.tweets.find((item) => item.id == id);
      tempData.reTweetsCount += 1;
    },
  },
});

export const store = configureStore({
  reducer: {
    [loginOrNotSlice.name]: loginOrNotSlice.reducer,
    [tweetDataSlice.name]: tweetDataSlice.reducer,
  },
});
