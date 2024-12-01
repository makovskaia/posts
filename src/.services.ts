import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PostDataType = {
	id?: number,
	title?: number,
	body?: number,
	userId?: number
}
type MethodType = 'GET'|'POST'|'PUT'|'DELETE'
type QueryProps = {
	url: string,
	method: MethodType,
	data?: PostDataType
}

const buildQuery = ({ url, method, data }: QueryProps) => {
	const query = {
		url,
	    method,
    }
    if(data){
    	query.body = JSON.stringify(data)
	    query.headers = {
		    'Content-type': 'application/json; charset=UTF-8',
		}
    }
    return query
}
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts/' }),
  endpoints: (builder) => ({
  	getPosts: builder.query<IPost[], PostDataType>({
  		query: () => ``,
  	}),
  	addPost: builder.query<PostDataType, IPost>({
      query: (post: IPost) => buildQuery({url:'', method:'POST', data: post})
  	}),
    editPost: builder.query<PostDataType, IPost>({
    	query: (post: IPost) => buildQuery({url:''+post.id, method:'PUT', data: post})
    }),
    deletePost: builder.query<PostDataType, PostDataType>({
    	query: (post: PostDataType) => buildQuery({url:''+post.id, method:'DELETE'})
    }),
  }),
})
export const { useGetPosts } = postApi