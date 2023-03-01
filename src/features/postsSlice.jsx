import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};
export const fetchPosts = createAsyncThunk("posts/fetchPosts", () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.data.map((posts) => posts));
});

//create new post:
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        postData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//update exiting post:
export const editPost = createAsyncThunk(
  "posts/editPost",
  async (updatedPost) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
      updatedPost
    );
    return response.data;
  }
);

//Delete Post:
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return postId;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,

  extraReducers: (builder) => {
    // Fetch Posts Cases:
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
    //Create New Post:
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts.push(action.payload);
      state.error = "";
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
    //Edit Old Post:
    builder.addCase(editPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        state[index + 1] = updatedPost;
      }
    });
    builder.addCase(editPost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
    //Delete Old Post:
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.error = "";
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default postsSlice.reducer;
