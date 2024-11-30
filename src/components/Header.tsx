type HeaderProps = {
	onCreatePost: ()=>void
}
export function Header({ onCreatePost }: HeaderProps) {
	return (
		<div>
			<h1>Posts</h1>
			<button onClick={onCreatePost}>New Post</button>
		</div>
	)
}