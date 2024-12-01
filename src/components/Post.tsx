import { Card, Typography, CardContent, CardActions, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

type PostProps = {
	id: number,
	body: string,
	title: string,
	onEditPost: (post: IPost)=>{},
	onDeletePost: (id: number)=>{},

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

const buttonStyle = {
	float: 'right'
}

export const Post = ({ id, title, body, onEditPost, onDeletePost }: PostProps) => (
	<Item>
		<CardContent>	
			<Typography variant="h6" gutterBottom>{title}</Typography>
			<Typography variant="body2" gutterBottom>{body}</Typography>
		</CardContent>
		<CardActions>
			<Button sx={buttonStyle} size="small" onClick={()=>{onEditPost({ id, title, body })}}><EditIcon/></Button>
			<Button sx={buttonStyle} size="small" onClick={()=>{onDeletePost(id)}}><DeleteIcon/></Button>
		</CardActions>
	</Item>
)