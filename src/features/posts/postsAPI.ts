export function fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  return fetch(url)
}