import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchPosts, addPost } from './postsAPI';


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
    const posts = await response.json()
    console.log(posts)
    return posts
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
        // state.status = 'loading';
        console.log('add post loading')
      })
      .addCase(addPostAsync.rejected, (state) => {
        // state.status = 'failed';
        console.log('add post failed')
      })
      .addCase(addPostAsync.fulfilled, (state, action) => {
        // state.status = 'none';
        console.log(action.payload, 'add post success')
      })
	}
});

export const selectPosts = (state: RootState) => state.posts.value;
export const getNewPostId = (state: RootState) => state.posts.length;
export const selectStatus = (state: RootState) => state.posts.status;


export default postsSlice.reducer;
