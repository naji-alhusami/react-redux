import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  comments: [],
  error: "",
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  (id) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        return response.data.map((comments) => comments
        )});
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    // Fetch Posts Cases:
    builder.addCase(fetchComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
      state.error = "";
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      state.comments = [];
      state.error = action.error.message;
    });
  },
});

export default commentsSlice.reducer;
