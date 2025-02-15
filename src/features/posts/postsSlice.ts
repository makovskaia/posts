import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { postsAPI } from "./postsAPI";

const initialState: PostsState = {
  value: [],
  length: 0,
  status: "loading",
};

export const postsAsync = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await postsAPI.fetchPosts();
  const posts = await response.json();
  return posts;
});

export const addPostAsync = createAsyncThunk(
  "posts/addPost",
  async (post: IPost) => {
    const response = await postsAPI.addPost(post);
    const newPost = await response.json();
    return newPost;
  },
);

export const editPostAsync = createAsyncThunk(
  "posts/editPost",
  async (post: IPost) => {
    const response = await postsAPI.editPost(post);
    const newPost = await response.json();
    return newPost;
  },
);

export const deletePostAsync = createAsyncThunk(
  "posts/deletePost",
  async (id: number) => {
    const response = await postsAPI.deletePost(id);
    const deletedPost = await response.json();
    return { id };
  },
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(postsAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addPostAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPostAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addPostAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const newVal = [...state.value];
        state.value = [...newVal, action.payload];
      })
      .addCase(editPostAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editPostAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(editPostAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const newVal = [...state.value];
        const id = newVal.findIndex((el) => el.id == action.payload.id);
        newVal[id] = action.payload;
        state.value = newVal;
      })
      .addCase(deletePostAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletePostAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deletePostAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const newVal = [...state.value];
        const id = newVal.findIndex((el) => el.id == action.payload.id);
        newVal.splice(id, 1);
        state.value = newVal;
      });
  },
});

export const selectPosts = (state: RootState) => state.posts.value;
export const getNewPostId = (state: RootState) => state.posts.length;
export const selectStatus = (state: RootState) => state.posts.status;
export const { setStatus } = postsSlice.actions;

export default postsSlice.reducer;
