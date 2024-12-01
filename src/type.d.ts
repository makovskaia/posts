interface IPost {
  id: number
  title: string
  body: string
  userId: number
}

interface PostsState {
  value: IPost[],
  length: number
  status: 'idle' | 'loading' | 'failed';
}

interface PostState {
  mode: 'none' | 'edit' | 'delete' | 'create',
  post: IPost,
  status: 'idle' | 'loading' | 'failed'
}