import { Card, Typography, CardContent, CardActions, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

type PostProps = {
	id: number,
	body: string,
	title: string,
	onEditPost: (id:number)=>{},
	onDeletePost: (id:number)=>{},

}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

// const cardStyle = {
// 	width: '40%',
// 	display: i
// }
const buttonStyle = {
	float: 'right'
}

export const Post = (props: PostProps) => (
	<Item>
		<CardContent>	
			<Typography variant="h6" gutterBottom>{props.title}</Typography>
			<Typography variant="body2" gutterBottom>{props.body}</Typography>
		</CardContent>
		<CardActions>
			<Button sx={buttonStyle} size="small" onClick={()=>{props.onEditPost(props.id)}}><EditIcon/></Button>
			<Button sx={buttonStyle} size="small" onClick={()=>{props.onDeletePost(props.id)}}><DeleteIcon/></Button>
		</CardActions>
	</Item>
)