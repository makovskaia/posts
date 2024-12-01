import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { postsAPI } from './postsAPI';


const initialState: PostsState = {
  value: [],
  length: 0,
  status: 'loading',
};

export const postsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await postsAPI.fetchPosts()
    const posts = await response.json()
    console.log(posts)
    return posts
  }
);

export const addPostAsync = createAsyncThunk(
  'posts/addPost',
  async (post: IPost) => {
    const response = await postsAPI.addPost(post)
    const newPost = await response.json()
    console.log(newPost)
    return newPost
  }
);

export const editPostAsync = createAsyncThunk(
  'posts/editPost',
  async (post: IPost) => {
    const response = await postsAPI.editPost(post)
    const newPost = await response.json()
    console.log(newPost)
    return newPost
  }
);

export const deletePostAsync = createAsyncThunk(
  'posts/deletePost',
  async (id: number) => {
    const response = await postsAPI.deletePost(id)
    const deletedPost = await response.json()
    console.log(deletedPost)
    return { id }
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
        const newVal = [...state.value]
        state.value = [...newVal, action.payload]
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
        const newVal = [...state.value]
        const id = newVal.findIndex(el => el.id == action.payload.id)
        newVal[id] = action.payload
        state.value = newVal
      })
      .addCase(deletePostAsync.pending, (state) => {
        state.status = 'loading';
        console.log('delete post loading')
      })
      .addCase(deletePostAsync.rejected, (state) => {
        state.status = 'failed';
        console.log('delete post failed')
      })
      .addCase(deletePostAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload, 'delete post success')
        const newVal = [...state.value]
        const id = newVal.findIndex(el => el.id == action.payload.id)
        newVal.splice(id,1)
        state.value = newVal
      })
	}
});

export const selectPosts = (state: RootState) => state.posts.value;
export const getNewPostId = (state: RootState) => state.posts.length;
export const selectStatus = (state: RootState) => state.posts.status;


export default postsSlice.reducer;
