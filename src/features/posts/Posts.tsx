import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  postsAsync,
  selectPosts
} from './postsSlice';

export function Posts() {
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(postsAsync())
  }, [])
  return (
    <div></div>
  )
}