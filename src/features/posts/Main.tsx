import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  postsAsync,
  selectStatus,
  getNewPostId,
  addPostAsync,
  editPostAsync,
  deletePostAsync
} from './postsSlice';
import { Post } from '../../components/Post'
import { Header } from '../../components/Header'
import { Loader } from '../../components/Loader'
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
    console.log(title, body, id)
    dispatch(addPostAsync({id, title, body, userId: 11}))
    setModalState('closed')
  }
  const onSubmitEditPost = (title: string, body: string) => {
    console.log(title, body, id)
    dispatch(editPostAsync({id, title, body, userId: 11}))
    setModalState('closed')
  }

  const onDeletePost = (id: number) => {
    console.log(id)
    dispatch(deletePostAsync(id))
  }
  
  const onClose = () => setModalState('closed')


  return (
    <div>
      <Header onCreatePost={onCreatePost} />
      <Loader
        visible={status === 'loading'}
      />
      <PostModal
        state={modalState}
        title={title}
        body={body}
        onSubmit={modalState === 'create' ? onSubmitCreatePost : onSubmitEditPost}
        onClose={onClose}
      />
      <main>
          {status === 'failed' ?
            (<p>failed</p>)  : <Posts onEditPost={onEditPost} onDeletePost={onDeletePost}/>
        }
      </main>
      {/*<footer/>*/}
    </div>
  )
}