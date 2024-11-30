import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  postsAsync,
  selectStatus,
  getNewPostId,
  addPostAsync 
} from './postsSlice';
import { Post } from '../../components/Post'
import { Header } from '../../components/Header'
import { PostModal } from '../../components/PostModal'
import { Posts } from './Posts'

export function Main() {
  const [ modalOpen, setModalOpen ] = useState(false)
  const status = useAppSelector(selectStatus);
  const id = useAppSelector(getNewPostId)
  const dispatch = useAppDispatch();
  // useEffect(()=>{
  //   dispatch(postsAsync())
  // }, [])
  const onCreatePost = () => {
      setModalOpen(true)
  }
  const onSubmit = (title: string, body: string) => {
    console.log(title, body, id)
    dispatch(addPostAsync({id, title, body}))
    setModalOpen(false)
  }
  
  const onClose = () => setModalOpen(false)
  return (
    <div>
      <Header onCreatePost={onCreatePost} />
      <PostModal open={modalOpen} title="" body="" onSubmit={onSubmit} onClose={onClose}/>
      <main>
        {status === 'loading' ?
          (<p>loading</p>) : status === 'failed' ?
            (<p>failed</p>)  : <Posts/>
        }
      </main>
      {/*<footer/>*/}
    </div>
  )
}