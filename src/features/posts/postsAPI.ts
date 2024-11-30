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