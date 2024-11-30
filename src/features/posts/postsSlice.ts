import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchPosts, addPost, editPost } from './postsAPI';


const initialState: PostsState = {
  value: [],
  length: 0,
  status: 'loading',
};

export const postsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetchPosts()
    const posts = await response.json()
    return posts
  }
);

export const addPostAsync = createAsyncThunk(
  'posts/addPost',
  async (post: IPost) => {
    console.log(post)
    const response = await addPost(post)
    const newPost = await response.json()
    console.log(newPost)
    return newPost
  }
);

export const editPostAsync = createAsyncThunk(
  'posts/editPost',
  async (post: IPost) => {
    console.log(post)
    const response = await editPost(post)
    const newPost = await response.json()
    console.log(newPost)
    return newPost
  }
);

export const deletePostAsync = createAsyncThunk(
  'posts/deletePost',
  async (post: IPost) => {
    console.log(post)
    const response = await editPost(post)
    const deletedPost = await response.json()
    console.log(deletedPost)
    return deletedPost
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(postsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload
      })
      .addCase(postsAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addPostAsync.pending, (state) => {
        state.status = 'loading';
        console.log('add post loading')
      })
      .addCase(addPostAsync.rejected, (state) => {
        state.status = 'failed';
        console.log('add post failed')
      })
      .addCase(addPostAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload, 'add post success')
      })
      .addCase(editPostAsync.pending, (state) => {
        state.status = 'loading';
        console.log('edit post loading')
      })
      .addCase(editPostAsync.rejected, (state) => {
        state.status = 'failed';
        console.log('edit post failed')
      })
      .addCase(editPostAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload, 'edit post success')
      })
      .addCase(editPostAsync.pending, (state) => {
        state.status = 'loading';
        console.log('delete post loading')
      })
      .addCase(editPostAsync.rejected, (state) => {
        state.status = 'failed';
        console.log('delete post failed')
      })
      .addCase(editPostAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload, 'delete post success')
      })
	}
});

export const selectPosts = (state: RootState) => state.posts.value;
export const getNewPostId = (state: RootState) => state.posts.length;
export const selectStatus = (state: RootState) => state.posts.status;


export default postsSlice.reducer;
