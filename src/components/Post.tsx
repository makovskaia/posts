import Paper from '@mui/material/Paper';
type PostProps = {
	id: number,
	body: string,
	title: string,
	onEditPost: (id:number)=>{},
	onDeletePost: (id:number)=>{}
}

export const Post = (props: PostProps) => (
	<Paper elevation={4}>
		<header>{props.title}</header>
		<main>{props.body}</main>
		<footer>
			<button onClick={()=>{props.onEditPost(props.id)}}>edit</button>
			<button onClick={()=>{props.onDeletePost(props.id)}}>delete</button>
		</footer>
	</Paper>
)