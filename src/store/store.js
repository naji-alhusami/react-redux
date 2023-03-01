import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/postsSlice";
import commentsSlice from "../features/commentsSlice";
import usersSlice from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    comments: commentsSlice,
    users: usersSlice
  },
});
