import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  postsAsync,
  selectStatus,
  getNewPostId,
  addPostAsync,
  editPostAsync,
  deletePostAsync,
  setStatus
} from './postsSlice';
import { Post } from '../../components/Post'
import { Header } from '../../components/Header'
import { Loader } from '../../components/Loader'
import { Error } from '../../components/Error'
import { PostModal } from '../../components/PostModal'
import { Posts } from './Posts'
import Box from '@mui/material/Box';

export function Main() {
  const [ modalState, setModalState ] = useState<'closed'|'edit'|'create'>('closed')
  const status = useAppSelector(selectStatus);
  const nextId = useAppSelector(getNewPostId)
  const [id,setId] = useState(nextId)

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(postsAsync())
  }, [])

  const onCreatePost = () => {
      setModalState('create')
  }
  const onEditPost = (post: IPost) => {
    setTitle(post.title)
    setBody(post.body)
    setId(post.id)
    setModalState('edit')
  }

  const onSubmitCreatePost = (title: string, body: string) => {
    dispatch(addPostAsync({id, title, body, userId: 11}))
    setModalState('closed')
  }
  const onSubmitEditPost = (title: string, body: string) => {
    dispatch(editPostAsync({id, title, body, userId: 11}))
    setModalState('closed')
  }

  const onDeletePost = (id: number) => {
    dispatch(deletePostAsync(id))
  }
  
  const onClose = () => {
    setModalState('closed')
    setTitle('')
    setBody('')
  }

  const onErrorClose = () => {
    dispatch(setStatus('idle'))
  }

  return (
    <div>
      <Header onCreatePost={onCreatePost} />
      <Loader
        visible={status === 'loading'}
      />
      <Error
        visible={status === 'failed'}
        onClose={onErrorClose}
      />
      <PostModal
        state={modalState}
        title={title}
        body={body}
        onSubmit={modalState === 'create' ? onSubmitCreatePost : onSubmitEditPost}
        onClose={onClose}
        headerText={modalState === 'create' ? 'Create Post' : modalState === 'edit' ? 'Edit Post' : ''}
      />
      <main> 
          <Posts onEditPost={onEditPost} onDeletePost={onDeletePost}/>
        
      </main>
      {/*<footer/>*/}
    </div>
  )
}