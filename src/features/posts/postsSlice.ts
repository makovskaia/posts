import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchPosts } from './postsAPI';

interface IPost {
  id: number
  title: string
  body: string
}

type Posts = {
  value: IPost[]
}

export interface PostsState {
  value: Posts | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PostsState = {
  value: null,
  status: 'idle',
};

export const postsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetchPosts()
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
      });
	}
});

export const selectPosts= (state: RootState) => state.posts.value;

export default postsSlice.reducer;
