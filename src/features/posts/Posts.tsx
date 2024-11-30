// @ts-nocheck
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectPosts,
} from './postsSlice';
import { Post } from '../../components/Post'

const styles = {

}

export function Posts() {
  const posts = useAppSelector(selectPosts);
  return (
    <>
      {posts.map((p: IPost) => (
        <Post
          key={p.id}
          id={p.id}
          title={p.title}
          body={p.body}
          onEditPost={()=>{}}
          onDeletePost={()=>{}}/>
      ))}
    </>
  )
}