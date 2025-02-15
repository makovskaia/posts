const url = "https://jsonplaceholder.typicode.com/posts";

export function fetchPosts() {
  return fetch(url);
}

export function addPost(post: IPost) {
  const request = new Request(url, {
    method: "POST",
    body: JSON.stringify({ ...post, userId: 1 }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return fetch(request);
}

export function editPost(post: IPost) {
  const request = new Request(`${url}/${post.id}`, {
    method: "PUT",
    body: JSON.stringify({ ...post, userId: 1 }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return fetch(request);
}

export function deletePost(id: number) {
  const request = new Request(`${url}/${id}`, {
    method: "DELETE",
  });
  return fetch(request);
}

export const postsAPI = {
  fetchPosts,
  addPost,
  editPost,
  deletePost,
};
