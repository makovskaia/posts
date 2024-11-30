const url = 'https://jsonplaceholder.typicode.com/posts'
export function fetchPosts() {
  return fetch(url)
}

export function addPost(post: IPost) {
	const request = new Request(url, {
  		method: "POST",
  		body: JSON.stringify(post),
	});
  	return fetch(request)
}

export function editPost(post: IPost) {
	const request = new Request(`${url}/${post.id}`, {
  		method: "PATCH",
  		body: JSON.stringify(post),
	});
  	return fetch(request)
}

export function deletePost(post: IPost) {
	const request = new Request(`${url}/${post.id}`, {
  		method: "DELETE",
	});
  	return fetch(request)
}