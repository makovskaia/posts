// @ts-nocheck
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectPosts,
} from './postsSlice';
import { Post } from '../../components/Post'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

type postsProps = {
  onEditPost: (post: IPost) => void
  onDeletePost: (id: number) => void
}

export function Posts({ onEditPost, onDeletePost }: postsProps) {
  const posts = useAppSelector(selectPosts);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {posts.map((p: IPost) => (
          <Grid key={p.id} size={{ xs: 2, sm: 4, md: 4 }}>
            
              <Post
                key={p.id}
                id={p.id}
                title={p.title}
                body={p.body}
                onEditPost={onEditPost}
                onDeletePost={onDeletePost}
              />
              
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}