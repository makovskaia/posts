import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

type HeaderProps = {
	onCreatePost: ()=>void
}
export function Header({ onCreatePost }: HeaderProps) {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
	            variant="h6"
	            noWrap
	            align="left"
	            component="div"
	            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
	          >
	            Posts
	          </Typography>
				<Button variant="outlined" color="inherit" onClick={onCreatePost}>New Post</Button>
			</Toolbar>
		</AppBar>
	)
}